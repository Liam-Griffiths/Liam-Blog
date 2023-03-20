
<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    export let data: {
        slug: string;
        post: string;
        metadata: any;
    };
    const source = data.post;
</script>

<div class="flex flex-row">
    <div class="relative basis-full flex flex-col justify-center overflow-hidden bg-[#282828] min-h-[10vh]">
        <div class="flex items-center justify-center md:gap-x-6 gap-x-2 h-full">
            <a href="/blog" class="text-sm font-semibold leading-6 text-white hover:underline"><span aria-hidden="true">←</span> Posts</a>
            <a href="/" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
            <a href="/experience" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Hire Me</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
        </div>
    </div>
</div>

<main class="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white  min-h-[80vh]">
    {#if !data.metadata.hide}
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
            <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                        <img class="mr-4 w-16 h-16 rounded-full" src="/images/me.jpg" alt="Liam Griffiths">
                        <div>
                            <a href="#" rel="author" class="text-xl font-bold text-gray-900">Liam Griffiths</a>
                            <p class="text-base font-light text-gray-500 ">Senior Software Engineer</p>
                        </div>
                    </div>
                </address>
                <h1 class=" text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl ">{data.metadata.title}</h1>
                <p class="mb-4 lg:mb-6 font-extrabold leading-tight text-gray-300 ">{data.metadata.category}</p>
            </header>
            <div class="rounded shadow-xl bg-indigo-300 h-56 overflow-hidden relative">
                <img class="w-full absolute -bottom-14 object-cover" src={'/images/' + (data.metadata.image ?? 'default.jpg')}>
            </div>
            <hr class="my-2 border-gray-200 sm:mx-auto lg:my-4">
            <div class="prose mt-5" >
                <SvelteMarkdown {source} />
            </div>
        </article>
    </div>
    {:else }
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue text-center">
                <h1 >Post Hidden</h1>
            </article>
        </div>
    {/if}
</main>

<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]">
    <div class="flex items-center justify-center gap-x-6 w-full h-full">
        <span class="text-sm leading-6 sm:text-center text-white ">© {`${new Date().getFullYear()}`} - <a class="font-semibold leading-6 sm:text-center text-white underline" href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span>
    </div>
</footer>