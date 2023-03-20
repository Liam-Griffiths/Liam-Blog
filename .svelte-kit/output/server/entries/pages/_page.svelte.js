import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import "svelte-reveal";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#f3f4f6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="min-h-screen"><div class="flex flex-row"><div class="relative basis-full flex flex-col justify-center overflow-hidden bg-[#282828] min-h-[90vh]"><div class="my-5 sm:mb-14 md:hidden flex items-center justify-center md:gap-x-6 gap-x-2 landscape:hidden"><a href="/experience" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Hire Me</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
            <a href="/blog" class="text-sm font-semibold leading-6 text-white hover:underline">Posts <span aria-hidden="true">→</span></a></div>
        ${``}</div></div>


<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]"><div class="flex items-center justify-center gap-x-6 w-full h-full"><span class="text-sm leading-6 sm:text-center text-white ">© ${escape(`${new Date().getFullYear()}`)} - <a class="font-semibold leading-6 sm:text-center text-white underline" href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span></div></footer></div>`;
});
export {
  Page as default
};
