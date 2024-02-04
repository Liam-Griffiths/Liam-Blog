
<script lang="ts">
    export let data: {
        allPosts: {meta:{date:string}}[];
    };

    function compare( a, b ) {
        if ( (new Date(a.meta.date)) > (new Date(b.meta.date)) ){
            return -1;
        }
        if ( (new Date(a.meta.date)) < (new Date(b.meta.date)) ){
            return 1;
        }
        return 0;
    }

    data.allPosts.sort( compare );
</script>

<div class="flex flex-row">
    <div class="relative basis-full flex flex-col justify-center overflow-hidden bg-[#282828] min-h-[10vh]">
        <div class="flex items-center justify-center md:gap-x-6 gap-x-2 h-full">
            <a href="/" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
            <a href="/experience" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Experience</a>
            <a href="https://www.linkedin.com/in/liam-g-829103100" target="_blank" class="rounded-md bg-indigo-600 sm:p-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LinkedIn</a>
            <a href="https://github.com/Liam-Griffiths" target="_blank" class="rounded-md bg-indigo-600 px-3.5 sm:p-1 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Github</a>
        </div>
    </div>
</div>

<section class="bg-white min-h-[80vh]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div class="max-w-screen-sm text-left lg:mb-8 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Posts</h2>
            <p class="font-light text-gray-500 sm:text-xl">Mostly my thoughts about Audiobooks.</p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
            {#each data.allPosts as post}
                {#if !post.meta.hide}
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
        <span class="text-sm leading-6 sm:text-center text-white ">© {`${new Date().getFullYear()}`} - <a class="font-semibold leading-6 sm:text-center text-white underline" href="mailto:liam@liam-griffiths.co.uk">me@liam-griffiths.co.uk</a></span>
    </div>
</footer>
