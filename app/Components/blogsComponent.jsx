"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import BlogData from '../api/blogData'; // Assume this contains an array of blog post objects

const BlogsComponent = () => {
  const router = useRouter();

  const handleBlogClick=(title)=>{
    const slug = title.toLowerCase().replace(/ /g, '-');
    router.push(`/blogs/${slug}/`);

  }
    return (
      <section className='px-4 md:px-6 py-[120px] flex flex-col items-center border border-red-700'>
      <h1 className='text-4xl font-bold text-center mb-8 text-[#ff0000]'>Fire Safety Blogs</h1>
   <div className='md:flex gap-2'>
     {BlogData.map((post, index) => (
      <div
        key={index}
        onClick={() => handleBlogClick(post.title)}
        className='bg-white p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 mb-4'
      >
        <Image src={post.image} alt={post.title} width={200} height={200} className='w-full h-[200px] rounded-lg mb-2' />
        <h2 className='text-xl font-semibold'>{post.title}</h2>
        <h3 className='text-md text-gray-700'>{post.heading}</h3>
        <p className='text-gray-600'>{post.description.substring(0, 50)}...</p>
      </div>
    ))};
   </div>

    
   </section>
    )
    
    
   
  };

 


export default BlogsComponent;
