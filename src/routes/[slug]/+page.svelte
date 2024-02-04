<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import {onMount} from 'svelte';

    console.log("hi");

    export let data: {
        slug: string;
        post: string;
        metadata: any;
        twoRandomPosts: any;
    };

    $: source = data.post;
    $: randomPosts = data.twoRandomPosts;

    // Step 1: Define the array of humorous job titles
    const titles = [
        "Señor Software Engineer",
        "ChatGPT's Human Middleware",
        "Merge Conflict Mediator",
        "Branch Manager",
        "Codebase Cartographer",
        "Kanban Man",
        "Caffeine Compiler",
        "Rubber Duck Debugger",
        "Professional Googler",
        "Lint Lawmaker",
        "Regex Riddler",
        "Jira Janitor",
        "Tech Tinkerer",
        "Copy Paste Technician",
        "Got That Swagger",
        "I know how to quit Vim"
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
{#key source}
<main class="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white min-h-[80vh]">

    {#if !data.metadata.hide}
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
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
                <div class="rounded shadow-xl bg-indigo-300 h-96 overflow-hidden relative">
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
{/key}
<section class="bg-[#636363]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div class="grid gap-8 lg:grid-cols-2">
            {#each randomPosts as post}
                {#if (post && post.meta) && !post.meta.hide}
                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="rounded shadow-xl bg-indigo-300 h-48 overflow-hidden relative">
                                <img class="w-full h-full absolute top-0 sm:-bottom-14 object-cover" src={'/images/' + (post.meta.image ?? 'default.jpg')}>
                            </div>
                            <div>
                                <div class="flex justify-between items-center mb-5 text-gray-500">
                          <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                              {post.meta.category ?? "Uncategorized"}
                          </span>
                                    <span class="text-sm">{new Date(post.meta.date + " 00:00:01").toDateString()}</span>
                                </div>
                                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">{post.meta.title}</a></h2>
                                <p class="mb-5 font-light text-gray-500 ">{post.meta.description}</p>
                                <div class="flex justify-between items-center">
                                    <a href="/{post.path}" class="inline-flex items-center font-medium text-primary-600 hover:underline">
                                        Read more
                                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </article>
                {/if}
            {/each}
        </div>
    </div>
</section>

<footer class="bg-[#3d3d3d] flex flex-row h-[10vh]">
    <div class="flex items-center justify-center gap-x-6 w-full h-full">
        <span class="text-sm leading-6 sm:text-center text-white ">© {`${new Date().getFullYear()}`} - <a
                class="font-semibold leading-6 sm:text-center text-white underline"
                href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span>
    </div>
</footer>
