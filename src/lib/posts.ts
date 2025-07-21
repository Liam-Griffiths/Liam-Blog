

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Parser from 'rss-parser';
import * as cheerio from 'cheerio';

const postsDirectory = path.join(process.cwd(), 'posts');
const parser = new Parser();

function slugify(text: string) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

interface PostData {
  id: string;
  date: string;
  title: string;
  image?: string;
  snippet: string;
  category?: string;
  source?: 'substack' | 'local';
  link?: string; // For Substack posts
  content?: string; // Full content for Substack posts
  description?: string; // Description for Substack posts
}

async function getSubstackPosts(): Promise<PostData[]> {
  try {
    const feed = await parser.parseURL('https://humanoidfuture.substack.com/feed');
    return feed.items.map(item => {
      const imageUrl = item.enclosure && item.enclosure.url ? item.enclosure.url : (item.itunes && item.itunes.image ? item.itunes.image : undefined);
      return {
        id: slugify(item.title || item.guid || ''),
        date: item.pubDate ? new Date(item.pubDate).toISOString() : '',
        title: item.title || 'No Title',
        snippet: item.description ? item.description.substring(0, 150) + '...' : (item.contentSnippet ? item.contentSnippet.substring(0, 150) + '...' : '...'),
        source: 'substack',
        link: item.link,
        category: 'Substack Articles', // Assign a category for Substack posts
        image: imageUrl,
        content: cleanHtmlContent(item['content:encoded'] || item.content || ''),
        description: item.description || item.contentSnippet || '',
      };
    });
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return [];
  }
}

function cleanHtmlContent(htmlContent: string): string {
  const $ = cheerio.load(htmlContent);

  // Define allowed tags
  const allowedTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'a'];

  // Remove specific elements like captioned image containers and figcaptions
  $('.captioned-image-container').remove();
  $('figcaption').remove();

  // Remove all attributes except 'src' for images and 'href' for links
  $('*').each((index, element) => {
    const $el = $(element);
    const tagName = $el.prop('tagName').toLowerCase();

    if (!allowedTags.includes(tagName)) {
      $el.replaceWith($el.contents()); // Unwrap disallowed tags
    } else {
      const attributesToRemove = Object.keys($el.attr() || {}).filter(attr => {
        if (tagName === 'img' && attr === 'src') return false;
        if (tagName === 'a' && attr === 'href') return false;
        return true;
      });
      attributesToRemove.forEach(attr => $el.removeAttr(attr));
    }
  });

  return $.html();
}

export async function getSortedPostsData(): Promise<PostData[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const localPostsData: PostData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const filteredContent = matterResult.content
      .replace(/^\s*(Overall|Performance|Story):\s*\d+\s*out\s*of\s*\d+\s*stars\s*$/gm, '') // Remove rating lines
      .replace(/^#+\s*.*$/gm, '') // Remove markdown titles (lines starting with #)
      .replace(/^`{3,}\s*.*$/gm, '') // Remove markdown code block fences (lines with ```)
      .replace(/\n\s*\n/g, '\n') // Collapse multiple newlines into a single newline
      .trim();
    const snippet = filteredContent.substring(0, 150) + '...';

    // Combine the data with the id
    return {
      id,
      snippet,
      source: 'local',
      ...(matterResult.data as { date: string; title: string; hide?: boolean; image?: string; category?: string }),
    };
  });

  // Filter out hidden local posts
  const publishedLocalPostsData = localPostsData.filter(post => !post.hide);

  // Get Substack posts
  const substackPostsData = await getSubstackPosts();

  // Combine all posts
  const allPosts = [...publishedLocalPostsData, ...substackPostsData];

  // Sort posts by date
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  // Check if it's a local post
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      source: 'local',
      ...(matterResult.data as { date: string; title: string; image?: string; category?: string }),
    };
  } else {
    // It might be a Substack post, but we don't fetch full content here.
    // The link will be used to redirect.
    const substackPosts = await getSubstackPosts();
    const substackPost = substackPosts.find(post => post.id === id);
    if (substackPost) {
      return {
        id: substackPost.id,
        contentHtml: substackPost.content || '',
        source: 'substack',
        title: substackPost.title,
        date: substackPost.date,
        link: substackPost.link,
        category: substackPost.category,
        image: substackPost.image,
        description: substackPost.description,
      };
    }
  }
  return null;
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  const localPostIds = fileNames.filter(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return !matterResult.data.hide;
  }).map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });

  const substackPosts = await getSubstackPosts();
  const substackPostIds = substackPosts.map(post => ({
    params: {
      id: post.id,
    },
  }));

  return [...localPostIds, ...substackPostIds];
}

export async function getPostsByCategory(category: string, currentPostId: string) {
  const allPosts = await getSortedPostsData(); // Ensure this is awaited
  return allPosts.filter(post => post.category === category && post.id !== currentPostId);
}
