import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import "svelte-reveal";
import { S as SvelteMarkdown } from "../../../chunks/SvelteMarkdown.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#f3f4f6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const source = data.post;
  console.log("boop", data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="flex flex-row"><div class="relative basis-full flex flex-col justify-center overflow-hidden bg-[#282828] min-h-[10vh]"><div class="flex items-center justify-center md:gap-x-6 gap-x-2 h-full"><a href="/" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
            <a href="/blog" class="text-sm font-semibold leading-6 text-white hover:underline">Posts <span aria-hidden="true">→</span></a></div></div></div>
<div class="flex flex-row"><div class="relative basis-full flex flex-col justify-center min-h-[90vh] py-10"><div class="flex justify-between px-4 mx-auto max-w-screen-xl "><article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-inverts"><header class="mb-4 lg:mb-6 not-format"><address class="flex items-center mb-6 not-italic"><div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img class="mr-4 w-16 h-16 rounded-full" src="/images/me.jpg" alt="Liam Griffiths">
                                <div><a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Liam Griffiths</a>
                                    <p class="text-base font-light text-gray-500 dark:text-gray-400">Senior Software Engineer</p></div></div></address></header>
                    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                    <div class="prose">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></article></div></div></div>

<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]"><div class="flex items-center justify-center gap-x-6 w-full h-full"><span class="text-sm leading-6 sm:text-center text-white ">© ${escape(`${new Date().getFullYear()}`)} - <a class="font-semibold leading-6 sm:text-center text-white underline" href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span></div></footer>`;
});
export {
  Page as default
};
