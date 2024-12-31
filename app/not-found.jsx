
import React from 'react';

export default function NotFound(){
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl text-gray-800 mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="px-4 py-2 bg-[#ff0000] text-white rounded hover:bg-red-600 transition duration-300"
      >
        Go Back Home
      </a>
      
    </div>
  );
};


