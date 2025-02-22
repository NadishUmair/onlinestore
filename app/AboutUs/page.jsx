"use client"
import React from 'react';
import Image from "next/image";
import { GiSpeedBoat } from "react-icons/gi";

const AboutUs = () => {
  return (
    <section className="relative">
          <div className="relative w-full h-[90vh]">
 
 {/* <img src="/Assets/overall-hero.jpg" className="h-full w-full object-cover" alt="" /> */}

 <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>

 <div className="inset-0 absolute flex flex-col justify-center items-center">
 <h1 className="text-4xl font-bold  tracking-wider mb-12">
       <span className="">About</span> Us
     </h1>
 </div>
</div>
    

      <div className='relative flex flex-col justify-center items-center bg-gray-50 py-16' id='about' data-aos="fade-up">
     

        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      </div>
    </section>
  );
}

export default AboutUs;
