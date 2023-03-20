import { marked } from 'marked';
import parseMD from 'parse-md';

export async function load({ fetch, params, url }) {
    const allPostFiles = import.meta.glob('/static/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
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

    return {allPosts};
};