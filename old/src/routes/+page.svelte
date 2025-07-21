<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
<script>
    import { reveal } from 'svelte-reveal';
    import { afterUpdate } from 'svelte';

    let show = false;

    afterUpdate(() => {
        show = true;
    });
</script>

<div class="min-h-screen">
<div class="flex flex-row min-h-[90vh]">
    <div class="relative basis-full flex flex-col justify-center bg-[#282828] h-auto">
        <div class="my-5 sm:mb-14 sm:hidden flex items-center justify-center md:gap-x-6 gap-x-2 landscape:hidden">
            <a href="/experience" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Experience</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
            <a href="/blog" class="text-sm font-semibold leading-6 text-white hover:underline">Posts <span aria-hidden="true">→</span></a>
        </div>
        {#if show}
        <div x class=" mx-4 relative bg-[#3500d3] sm:landscape:p-2 sm:landscape:mb-2 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-none sm:px-10 shadow-solid-black">
            <div class="space-y-4 py-1 text-base leading-7 sm:landscape:space-y-2 sm:landscape:leading-3 sm:mx-4">
                <article class="prose lg:prose-xl text-white sm:landscape:prose-md">
                    <div class="text-center items-center md:m-4">
                        <h1 use:reveal class="mt-2 text-6xl font-bold tracking-tight text-white text-left px-7 mb-0">Liam<br/>Griffiths<br/><div class="font-light text-black underline mt-2" >Software<br/>Engineer<span class="font-bold ml-1 blinking-cursor">|</span></div></h1>
                        <p use:reveal class="text-lg leading-8 tracking-tight text-justify px-7 mt-4">Engineer from the UK. Living in BC, Canada. Builder of robust clean codebases. Lover of guitar, audiobooks and hiking.</p>
                        <div class="mt-10 hidden sm:flex items-center justify-center md:gap-x-6 gap-x-2 landscape:flex">
                            <a href="/experience" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Experience</a>
                            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
                            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
                            <a href="/blog" class="text-sm font-semibold no-underline leading-6 text-white hover:underline">Posts <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        {/if}
    </div>
</div>


<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]">
    <div class="flex items-center justify-center gap-x-6 w-full h-full">
        <span class="text-sm leading-6 sm:text-center text-white ">© {`${new Date().getFullYear()}`} - <a class="font-semibold leading-6 sm:text-center text-white underline" href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span>
    </div>
</footer></div>