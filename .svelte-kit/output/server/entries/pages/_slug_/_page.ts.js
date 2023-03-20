import "marked";
import parseMD from "parse-md";
async function load({ fetch, params, url }) {
  const slug = params["slug"];
  const res = await fetch(`/blog/${slug}.md`);
  const post = await res.text();
  const { metadata, content } = parseMD(post);
  return {
    slug,
    metadata,
    post: content
    // parse it as a html,
  };
}
export {
  load
};
