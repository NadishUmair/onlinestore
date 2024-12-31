"use client"
import React from 'react';
import Image from "next/image";
import { GiSpeedBoat } from "react-icons/gi";

const AboutUs = () => {
  return (
    <section className="relative">
          <div className="relative w-full h-[90vh]">
 
 <img src="/Assets/overall-hero.jpg" className="h-full w-full object-cover" alt="" />

 <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>

 <div className="inset-0 absolute flex flex-col justify-center items-center">
 <h1 className="text-4xl font-bold text-white tracking-wider mb-12">
       <span className="">About</span> Us
     </h1>
 </div>
</div>
      {/* Speedboat Icon in the Background */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <GiSpeedBoat className="text-[500px] text-blue-500" />
      </div>

      <div className='relative flex flex-col justify-center items-center bg-gray-50 py-16' id='about' data-aos="fade-up">
        <div className='flex flex-col lg:flex-row w-[90%] max-w-6xl gap-12'>
          {/* Mission Card 1 */}
          <div className='lg:w-1/2 flex flex-col justify-between items-start bg-white rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
            <div className="flex items-center mb-6">
              <GiSpeedBoat className="text-blue-500 text-4xl mr-4" />
              <h2 className='text-3xl font-semibold text-gray-800'>
                Our Mission
              </h2>
            </div>
            <p className='text-lg text-gray-600 leading-relaxed'>
              <span className='font-bold text-blue-500'>Smart Choice</span> is your premier destination for luxury yacht bookings in Dubai. We are committed to providing an unforgettable experience on the water, combining the highest standards of comfort, safety, and customer satisfaction.
              <br /><br />
              Our mission is to offer our clients a seamless booking experience, ensuring they have access to the most exclusive yachts and services available in Dubai. Whether it’s a day of leisure, a corporate event, or a special celebration, Smart Choice provides the perfect yacht for every occasion.
            </p>
          </div>

          {/* Mission Card 2 */}
          <div className='lg:w-1/2 flex flex-col justify-between items-start bg-white rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
            <div className="flex items-center mb-6">
              <GiSpeedBoat className="text-blue-500 text-4xl mr-4" />
              <h2 className='text-3xl font-semibold text-gray-800'>
                Our Vision
              </h2>
            </div>
            <p className='text-lg text-gray-600 leading-relaxed'>
              At <span className='font-bold text-blue-500'>Smart Choice</span>, our vision is to redefine luxury yacht experiences in Dubai by offering unparalleled service, luxury, and style. We aim to become the leading yacht rental service in Dubai, trusted by both locals and international visitors.
              <br /><br />
              Through innovation and a deep understanding of our clients' desires, we strive to deliver a personalized and exceptional yacht experience, allowing our guests to explore the waters of Dubai in ultimate luxury and comfort.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      </div>
    </section>
  );
}

export default AboutUs;
