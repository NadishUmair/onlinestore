"use client"
import React, { useState } from 'react';




const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track index of the hovered card
  const ServicesApi = [
    {title: "SUPER YACHT EXPERIENCE", img: "/Assets/services/service1.jpg"},
    {title: "YACHT RENTAL DUBAI", img: "/Assets/services/service2.jpg"},
    {title: "BOAT RENTAL DUBAI", img: "/Assets/services/service3.jpg"},
    {title: "SPORT FISHING CHARTER", img: "/Assets/services/service6.jpg"},
    {title: "SHARED YACHT TOUR", img: "/Assets/services/service7.jpg"},
    {title: "SUNSET & DINNER CRUISE", img: "/Assets/services/service4.jpg"},
    {title: "PRIVATE EVENT HIRE", img: "/Assets/services/service5.jpg"},
  ];
  return (
    <section>
            <div className="relative w-full h-[90vh]">
 
 <img src="/Assets/overall-hero.jpg" className="h-full w-full object-cover" alt="" />

 <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>

 <div className="inset-0 absolute flex flex-col justify-center items-center">
 <h1 className="text-4xl font-bold text-white tracking-wider mb-12">
      Our Services
     </h1>
 </div>
</div>

    <div data-aos="fade-up" className="py-10 bg-gray-50 p-4" id="services">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ServicesApi?.map((service, index) => (
          <div
            key={index}
            className="h-[300px] md:w-[300px] w-full relative"
            onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index
            onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered index
          >
            <img
              src={service.img}
              alt={service.title}
              className={`h-full w-full object-cover rounded-xl ${
                hoveredIndex === index ? "" : "brightness-50"
              }`} // Apply brightness only to the hovered card
            />
            <div className="inset-0 absolute flex flex-col justify-center items-center font-bold text-xl px-3">
              <h1 className="text-[#00a1b3] tracking-wide">{service?.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;
