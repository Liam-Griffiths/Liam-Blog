import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/index.js";
function compare(a, b) {
  if (new Date(a.meta.date) > new Date(b.meta.date)) {
    return -1;
  }
  if (new Date(a.meta.date) < new Date(b.meta.date)) {
    return 1;
  }
  return 0;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.allPosts.sort(compare);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-row"><div class="relative basis-full flex flex-col justify-center overflow-hidden bg-[#282828] min-h-[10vh]"><div class="flex items-center justify-center md:gap-x-6 gap-x-2 h-full"><a href="/" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
            <a href="/blog" class="text-sm font-semibold leading-6 text-white hover:underline">Posts <span aria-hidden="true">→</span></a></div></div></div>

<section class="bg-white dark:bg-gray-900 min-h-[80vh]"><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6"><div class="max-w-screen-sm text-left lg:mb-8 mb-8"><h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Liam&#39;s Posts</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Mostly my thoughts about Audiobooks.</p></div>
        <div class="grid gap-8 lg:grid-cols-2">${each(data.allPosts, (post) => {
    return `${!post.meta.hide ? `<article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 "><div class="grid md:grid-cols-2 gap-6"><div class="bg-indigo-300 h-48 overflow-hidden flex justify-center rounded shadow-xl"><img class="w-full h-full object-cover"${add_attribute("src", "/images/" + (post.meta.image ?? "default.jpg"), 0)}></div>
                    <div><div class="flex justify-between items-center mb-5 text-gray-500"><span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">${escape(post.meta.category ?? "Uncategorized")}</span>
                            <span class="text-sm">${escape(new Date(post.meta.date + " 00:00:01").toDateString())}</span></div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">${escape(post.meta.title)}</a></h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">${escape(post.meta.description)}</p>
                        <div class="flex justify-between items-center"><a href="${"/" + escape(post.path, true)}" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">Read more
                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a></div>
                    </div></div>

            </article>` : ``}`;
  })}</div></div></section>

<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]"><div class="flex items-center justify-center gap-x-6 w-full h-full"><span class="text-sm leading-6 sm:text-center text-white ">© ${escape(`${new Date().getFullYear()}`)} - <a class="font-semibold leading-6 sm:text-center text-white underline" href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span></div></footer>`;
});
export {
  Page as default
};
