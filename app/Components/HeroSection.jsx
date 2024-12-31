"use client"
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const musicianapi = [
    { img: "/Assets/herosection/hero1.jpg" },
    { img: "/Assets/herosection/hero2.jpg" },
    { img: "/Assets/herosection/hero3.jpg" }
   
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
      {musicianapi.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt={`Slide ${index}`}
          className={`absolute  hero-img  inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    {/* <div className="absolute   inset-0 bg-gradient-to-r from-secondary-black to-transparent pointer-events-none"></div> */}
        
  
      
    </section>
  );
}

export default HeroSection;
