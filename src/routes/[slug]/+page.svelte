<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import {onMount} from 'svelte';

    export let data: {
        slug: string;
        post: string;
        metadata: any;
    };
    const source = data.post;

    // Step 1: Define the array of humorous job titles
    const titles = [
        "Señor Software Engineer",
        "ChatGPT's Human Middleware",
        "Merge Conflict Mediator",
        "Branch Manager",
        "Codebase Cartographer",
        "Computer Janitor",
        '"Engineer"',
        "Kanban Man",
        "Caffeine Compiler",
        "Rubber Duck Debugger",
        "Professional Googler",
        "Lint Lawmaker",
        "Regex Riddler",
        "Jira Janitor",
        "Tech Tinkerer",
        "Copy Paste Technician"
    ];

    // Reactive variable for the current title
    let currentTitle = "Loading title...";

    // Array to keep track of used indices
    let usedIndices = [];

    // Function to select a random title and cycle through
    function getRandomTitle() {
        if (titles.length > 1) {
            // If all titles have been used, reset the used indices array
            if (usedIndices.length === titles.length) {
                usedIndices = [];
            }

            let newIndex, newTitle;
            do {
                newIndex = Math.floor(Math.random() * titles.length);
                // Ensure the new index has not been used in this cycle
            } while (usedIndices.includes(newIndex) || titles[newIndex] === currentTitle);

            newTitle = titles[newIndex];
            currentTitle = newTitle;
            // Mark this index as used
            usedIndices.push(newIndex);
        }
    }

    // On mount, select a random title
    onMount(() => {
        setTimeout(() => {
            getRandomTitle();
        }, 800);
    });
</script>

<style>
    /* Step 4: Blink animation */
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .blink {
        animation: fadeIn 0.8s;
    }

    .title-refresh-container {
        display: flex;
        width: 100%;
    }

    .refresh-icon {
        cursor: pointer;
        margin-left: 10px; /* Adjust spacing between title and icon as needed */
        max-height: 14px;
        margin-top: 6px;
    }
</style>

<div class="flex flex-row">
    <div class="relative basis-full flex flex-col justify-center overflow-hidden bg-[#282828] min-h-[10vh]">
        <div class="flex items-center justify-center md:gap-x-6 gap-x-2 h-full">
            <a href="/blog" class="text-sm font-semibold leading-6 text-white hover:underline"><span aria-hidden="true">←</span>
                Posts</a>
            <a href="/"
               class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
            <a href="/experience"
               class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Experience</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank"
               class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank"
               class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
        </div>
    </div>
</div>

<main class="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white  min-h-[80vh]">
    {#if !data.metadata.hide}
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
                <header class="mb-4 lg:mb-6 not-format">
                    <address class="flex items-center mb-6 not-italic w-100">
                        <div class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                            <img class="mr-4 w-16 h-16 rounded-full" src="/images/me2.jpg" alt="Liam Griffiths">
                            <div class="w-[65vw]">
                                <a href="#" rel="author" class="text-xl font-bold text-gray-900">Liam Griffiths</a>
                                <div class="title-refresh-container w-100">
                                    {#key currentTitle}
                                        <p class="text-base w-100 font-light text-gray-500 blink">{currentTitle}</p>
                                    {/key}
                                    <img src="/images/refresh.svg" alt="Refresh" class="refresh-icon" on:click={getRandomTitle}>
                                </div>
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
                <div class="prose mt-5">
                    <SvelteMarkdown {source}/>
                </div>
            </article>
        </div>
    {:else }
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article
                    class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue text-center">
                <h1>Post Hidden</h1>
            </article>
        </div>
    {/if}
</main>

<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]">
    <div class="flex items-center justify-center gap-x-6 w-full h-full">
        <span class="text-sm leading-6 sm:text-center text-white ">© {`${new Date().getFullYear()}`} - <a
                class="font-semibold leading-6 sm:text-center text-white underline"
                href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span>
    </div>
</footer>
