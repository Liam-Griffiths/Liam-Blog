
import { getAllPostIds, getPostData, getPostsByCategory, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return getAllPostIds();
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);

  if (!postData) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: postData.title,
    description: postData.description || postData.snippet,
    openGraph: {
      title: postData.title,
      description: postData.description || postData.snippet,
      url: `https://liam-griffiths.co.uk/posts/${postData.id}`,
      type: "article",
      images: postData.image ? [
        {
          url: postData.image.startsWith('http') ? postData.image : `https://liam-griffiths.co.uk/images/${postData.image}`,
          alt: postData.title,
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.description || postData.snippet,
      images: postData.image ? [postData.image.startsWith('http') ? postData.image : `https://liam-griffiths.co.uk/images/${postData.image}`] : [],
    },
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  const relatedPosts = postData.category ? await getPostsByCategory(postData.category, postData.id) : [];

  const allPosts = await getSortedPostsData();
  const localMarkdownPosts = allPosts.filter(
    (post) => post.source === 'local' && post.id !== params.id
  );

  // Shuffle and pick 2 random posts
  const shuffledPosts = localMarkdownPosts.sort(() => 0.5 - Math.random());
  const randomPosts = shuffledPosts.slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 md:pr-8">
          <Link href="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to home</Link>
          <article className="prose prose-lg dark:prose-invert">
            {postData.image && (
              <div className="w-full h-96 overflow-hidden mb-4 rounded-md relative">
                <Image src={postData.image.startsWith('http') ? postData.image : `/images/${postData.image}`} alt={postData.title} fill className="object-cover object-[center_90%] rounded-md" />
              </div>
            )}
            <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
            {postData.description && (
              <p className="text-xl text-gray-400 mb-4">{postData.description}</p>
            )}
            <div className="text-gray-500 mb-4">
              {new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            {postData.source === 'substack' ? (
              <div className="relative overflow-hidden max-h-full">
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml.substring(0, Math.floor(postData.contentHtml.length * 0.33)) + '...' }} />
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            )}
            {postData.source === 'substack' && postData.link && (
              <div className="mt-12 mb-24 text-center">
                <a href={postData.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out">
                  Read the rest on my Substack
                </a>
              </div>
            )}
          </article>
        </div>
        {relatedPosts.length > 0 && (
          <aside className="md:w-1/4 mt-8 md:mt-10 md:pl-8 border-t md:border-t-0 md:border-l border-gray-700 pt-8">
            <h3 className="text-2xl font-bold mb-4">More in {postData.category}</h3>
            <ul>
              {relatedPosts.map(({ id, title }) => (
                <li key={id} className="mb-2">
                  <Link href={`/posts/${id}`} className="text-blue-400 hover:underline">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
      {randomPosts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {randomPosts.map(post => (
              <div key={post.id} className="w-full md:w-1/2 p-4 border border-gray-700 rounded-lg flex flex-col items-center text-center">
                {post.image && (
                  <div className="relative w-full h-48 rounded-md mb-4">
                    <Image src={`/images/${post.image}`} alt={post.title} fill className="object-cover object-[center_80%] rounded-md" />
                  </div>
                )}
                <Link href={`/posts/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline mb-2">
                  {post.title}
                </Link>
                <p className="text-gray-400 text-sm mb-2">{post.snippet}</p>
                <small className="text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
