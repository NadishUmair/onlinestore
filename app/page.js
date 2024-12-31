"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import LetsGo from './Components/letsgo';

import Products from './products/page';








const HeroSection = dynamic(() => import('./Components/HeroSection'));





export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > window.innerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  return (
    <section className="relative">
      <HeroSection />
      {/* <OverView/> */}
 <Products/>
      {/* <GalleryComponent/> */}

      {/* <Services/> */}
      <LetsGo/>

     
      {showScrollToTop && (
        <div
          className="fixed z-50 top-[90%] right-4 bg-[#ff0000] hover:bg-red-500 transition-all ease-in-out p-2 rounded-md cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-[1.5rem] text-white" />
        </div>
      )}
    </section>
  );
}
