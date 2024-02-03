import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { S as SvelteMarkdown } from "../../../chunks/SvelteMarkdown.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const source = data.post;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-row"><div class="relative basis-full flex flex-col justify-center overflow-hidden bg-[#282828] min-h-[10vh]"><div class="flex items-center justify-center md:gap-x-6 gap-x-2 h-full"><a href="/blog" class="text-sm font-semibold leading-6 text-white hover:underline"><span aria-hidden="true">←</span> Posts</a>
            <a href="/" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
            <a href="/experience" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Experience</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a></div></div></div>

<main class="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white dark:bg-gray-900 min-h-[80vh]">${!data.metadata.hide ? `<div class="flex justify-between px-4 mx-auto max-w-screen-xl "><article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-inverts"><header class="mb-4 lg:mb-6 not-format"><address class="flex items-center mb-6 not-italic"><div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img class="mr-4 w-16 h-16 rounded-full" src="/images/me.jpg" alt="Liam Griffiths">
                        <div><a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Liam Griffiths</a>
                            <p class="text-base font-light text-gray-500 dark:text-gray-400">Senior Software Engineer</p></div></div></address>
                <h1 class="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">${escape(data.metadata.title)}</h1>
                <p class="mb-4 lg:mb-6 font-extrabold leading-tight text-gray-300 dark:text-white">${escape(data.metadata.category)}</p></header>
            <div class="rounded shadow-xl bg-indigo-300 h-56 overflow-hidden relative"><img class="w-full absolute -bottom-14 object-cover"${add_attribute("src", "/images/" + (data.metadata.image ?? "default.jpg"), 0)}></div>
            <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4">
            <div class="prose mt-5">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></article></div>` : `<div class="flex justify-between px-4 mx-auto max-w-screen-xl "><article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-inverts text-center"><h1>Post Hidden</h1></article></div>`}</main>

<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]"><div class="flex items-center justify-center gap-x-6 w-full h-full"><span class="text-sm leading-6 sm:text-center text-white ">© ${escape(`${new Date().getFullYear()}`)} - <a class="font-semibold leading-6 sm:text-center text-white underline" href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span></div></footer>`;
});
export {
  Page as default
};
