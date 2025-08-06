
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface PostData {
  id: string;
  date: string;
  title: string;
  image?: string;
  snippet: string;
  category?: string;
}

interface PostListProps {
  allPostsData: PostData[];
}

export default function PostList({ allPostsData }: PostListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const categories = Array.from(new Set(allPostsData.map(post => post.category).filter(Boolean))) as string[];

  const filteredPosts = selectedCategory
    ? allPostsData.filter(post => post.category === selectedCategory)
    : allPostsData;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl flex flex-col md:flex-row">
      <div className="md:w-3/4 md:pr-8">
        <ul>
          {currentPosts.map(({ id, date, title, image, snippet, category }) => (
            <li key={id} className="mb-4 p-4 border border-gray-700 rounded-lg flex flex-row items-start space-x-4">
              {image ? (
                <div className="relative w-32 h-32 rounded-md flex-none">
                  <Image src={image.startsWith('http') ? image : `/images/${image}`} alt={title} fill className="object-cover rounded-md" />
                </div>
              ) : (
                <div className="w-32 h-32 bg-gray-800 rounded-md flex items-center justify-center text-gray-400 text-sm flex-none">
                  No Image
                </div>
              )}
              <div className="flex-grow">
                <Link href={`/posts/${id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                  {title}
                </Link>
                <p className="text-gray-400 text-sm mt-1">{snippet}</p>
                <div className="flex justify-between items-center mt-2">
                  <small className="text-gray-500">
                    {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </small>
                  {category && (
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">{category}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <aside className="md:w-1/4 mt-8 md:mt-0 md:pl-8 border-t md:border-t-0 md:border-l border-gray-700 pt-8 md:pt-0">
        <h3 className="text-2xl font-bold mb-4">Thoughts</h3>
        <ul>
          <li className="mb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`text-blue-400 hover:underline ${selectedCategory === null ? 'font-bold' : ''}`}
            >
              All
            </button>
          </li>
          {categories.map((categoryItem) => (
            <li key={categoryItem} className="mb-2">
              <button
                onClick={() => setSelectedCategory(categoryItem)}
                className={`text-blue-400 hover:underline ${selectedCategory === categoryItem ? 'font-bold' : ''}`}
              >
                {categoryItem}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
