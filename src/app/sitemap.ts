import { getSortedPostsData } from "@/lib/posts";

export default async function sitemap() {
  const posts = await getSortedPostsData();
  const blogs = posts.map((post) => ({
    url: `https://liam-griffiths.co.uk/posts/${post.id}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  const routes = ["", "/posts"].map((route) => ({
    url: `https://liam-griffiths.co.uk${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
