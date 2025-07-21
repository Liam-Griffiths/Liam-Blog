import { getSortedPostsData } from '@/lib/posts';
import PostList from '@/components/PostList';

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <>
      <div className="relative basis-full flex flex-col justify-center h-auto mt-16 dark:bg-[#3500d3]">
        <div className="relative sm:landscape:p-2 sm:landscape:mb-2 px-6 pt-10 pb-8 ring-4 dark:ring-1 ring-black dark:ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-none sm:px-10 hero-shadow">
          <div className="space-y-4 py-1 text-base leading-7 sm:landscape:space-y-2 sm:landscape:leading-3 sm:mx-4">
            <article className="prose lg:prose-xl text-white sm:landscape:prose-md">
              <div className="text-center items-center md:m-4">
                <h1 className="mt-2 text-6xl font-bold tracking-tight text-black dark:text-white text-left px-7 mb-0">Liam<br/>Griffiths<br/><div className="font-light text-gray-700 dark:text-black underline mt-2" >Software<br/>Engineer<span className="font-bold ml-1 blinking-cursor">|</span></div></h1>
                <p className="text-lg leading-8 tracking-tight text-justify px-7 mt-4 text-gray-700 dark:text-white">Engineer from the UK. Living in BC, Canada. Builder of robust clean codebases. Lover of guitar, audiobooks, writing and hiking.</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://github.com/Liam-Griffiths" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-0.5 px-2 rounded-full transition duration-300 ease-in-out shadow-angled-left-down dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/liam-g-829103100/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-0.5 px-2 rounded-full transition duration-300 ease-in-out shadow-angled-left-down dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white">
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-8 w-[90%] mx-auto" />
      <PostList allPostsData={allPostsData} />
    </>
  );
}