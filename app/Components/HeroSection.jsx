"use client"
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const musicianapi = [
    { img: "/Assets/herosection/product.jpg" },
    { img: "/Assets/herosection/product2.webp" },
    { img: "/Assets/herosection/product3.jpg" }
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === musicianapi.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh]   overflow-hidden">
      {/* {musicianapi.map((slide, index) => ( */}
        <img
          // key={index}
          src="/Assets/herosection/product.jpg" 
          // alt={`Slide ${index}`}
          alt="productsImg"
          className={`  hero-img  inset-0 w-full h-full duration-1000 ease-in-out `}
        />
      {/* ))} */}
    {/* <div className="absolute   inset-0 bg-gradient-to-r from-secondary-black to-transparent pointer-events-none"></div> */}
        
    <div className='absolute z-100 bottom-16 left-24 '>
      <button className='text-white p-4 w-[200px] tracking-wide bg-[#264846] hover:bg-[#155653] transition-all ease-in-out duration-300'>Shop Now</button>
    </div>
      
    </section>
  );
}

export default HeroSection;
