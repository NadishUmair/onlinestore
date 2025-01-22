"use client"
import React, { useEffect, useState } from 'react';
import { MdOutlineBedroomChild } from 'react-icons/md';
import yachts from '../api/yachtsData';
import axios from 'axios';
const OurProducts = () => {
  const [products,setProducts]=useState([]);
  const AllProducts=async()=>{
    console.log("hy");
    try {
          const response= await axios.get("https://store-backend-umber.vercel.app/api/product/all-products");
          console.log("resposne",response);
          setProducts(response?.data.products)
  
    } catch (error) {
      console.log("eror",error);
    }
  }
  useEffect(()=>{
   AllProducts();
  },[])
  
  return (
    <section>
                    <div className="relative w-full h-[90vh]">
 
 <img src="/Assets/overall-hero.jpg" className="h-full w-full object-cover" alt="" />

 <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>

 <div className="inset-0 absolute flex flex-col justify-center items-center">
 <h1 className="text-4xl font-bold text-white tracking-wider mb-12">
      Our Yachts
     </h1>
 </div>
</div>

    <div className="py-16 px-4 bg-gray-100" id='ouryachts'>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {yachts?.map((yacht, index) => (
          <a
          href={`/yachtsDetail/${yacht?.slug}`}
          key={index}  className="bg-white rounded-xl  overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
           
            <img src={yacht.img} alt={yacht?.name} className="w-full h-64 object-cover rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{yacht?.name}</h2>
              <div className="text-gray-600 text-sm mb-4 flex flex-wrap gap-4">
                <p><strong>Length:</strong> {yacht?.length || "N/A"}</p>
                <p className="flex items-center gap-1"><MdOutlineBedroomChild /> <strong>Bedrooms:</strong> {yacht.bedRooms}</p>
                <p><strong>Bathrooms:</strong> {yacht?.washRooms}</p>
                {yacht.kitchen && <p><strong>Kitchen:</strong> {yacht?.kitchen}</p>}
                {yacht.persons && <p><strong>Capacity:</strong> {yacht?.persons} persons</p>}
                {/* {yacht.desc && <p>{yacht?.desc}</p>} */}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-semibold text-gray-800">{yacht?.perhour || "Price: N/A"}</p>
                <button 
                   
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#00a1b3] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#228692] transition duration-300"
                >
                 Detail
                </button>
              </div>
            </div>
           
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};

export default OurProducts;
