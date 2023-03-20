import "marked";
import parseMD from "parse-md";
async function load({ fetch, params, url }) {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/static/blog/childhoods-end.md": () => import("../../../chunks/childhoods-end.js"), "/static/blog/demolished-man.md": () => import("../../../chunks/demolished-man.js"), "/static/blog/fall-of-moondust.md": () => import("../../../chunks/fall-of-moondust.js"), "/static/blog/markdown-cheatsheet.md": () => import("../../../chunks/markdown-cheatsheet.js"), "/static/blog/project-hail-mary.md": () => import("../../../chunks/project-hail-mary.js"), "/static/blog/rendezvous-with-rama.md": () => import("../../../chunks/rendezvous-with-rama.js"), "/static/blog/roadkill.md": () => import("../../../chunks/roadkill.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path]) => {
      const postPath = path.slice(13, -3);
      const res = await fetch(`/blog/${postPath}.md`);
      const post = await res.text();
      const { metadata } = parseMD(post);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return { allPosts };
}
export {
  load
};
