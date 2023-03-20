import { marked } from 'marked';
import parseMD from 'parse-md';

export async function load({ fetch, params, url }) {

    const res = await fetch(`/resume.md`);
    const post = await res.text();

    const { content } = parseMD(post)

    return {
        post: content, // parse it as a html,
    };
};