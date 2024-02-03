import { marked } from 'marked';
import parseMD from 'parse-md';

export async function load({ fetch, params, url }) {
    const slug = params['slug'];
    const res = await fetch(`/blog/${slug}.md`);
    const post = await res.text();

    const allPostFiles = import.meta.glob('/static/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    let allPosts = await Promise.all(
        iterablePostFiles.map(async ([path]) => {
            const postPath = path.slice(13, -3)

            const res = await fetch(`/blog/${postPath}.md`);
            const post = await res.text();

            const { metadata } = parseMD(post)

                return {
                    meta: metadata,
                    path: postPath,
                }

        })
    )

    allPosts = allPosts.filter(post => !post.meta.hide);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    // Shuffle the allPosts array
    shuffleArray(allPosts);

    // Slice the first two elements to get two random posts
    const twoRandomPosts = allPosts.slice(0, 2);


    const { metadata, content } = parseMD(post)

    return {
        slug,
        metadata,
        post: content, // parse it as a html,
        twoRandomPosts
    };
}