"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineBedroomChild } from "react-icons/md";

import {  FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";



const Products = () => {
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
    <section className="py-16 px-4 " id="ouryachts">
      <div className="flex flex-col justify-center items-center ">
        <span className="w-[210px] text-center text-[30px] rounded-md py-3 font-bold">
          Our Products
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products?.map((product, index) => (
          <Link
            
          href={''}
          rel="noopener noreferrer"
            key={index}
            className="bg-white hover:cursor-pointer h-[540px] overflow-hidden transform transition duration-300 "
          >
          <div className="h-[70%] overflow-hidden relative">
          <img
              src={product?.productImg}
              alt={product.productName}
              className="w-full h-full hover:scale-105 transition-all ease-in-out duration-300   object-cover "
            />
            <span className="absolute bg-black/90 tracking-wide text-center text-[10px] text-white py-1 z-10 top-0 w-[30%]">
              save {product?.prevPrice} %
            </span>
          </div>
            <div className="py-4 px-1 mt-2 h-[30%]">
              <div className="flex justify-between items-center">
                <span>
                  <h2 className="text-md font-light  text-gray-900 ">
                    {product?.productName}
                  </h2>
                </span>
                <div className="flex items-center">
                <span>
                
                  <div className="text-sm  font-light text-gray-800">
                <span className="text-red-600 line-through mr-2">Rs {product?.prevPrice}.00 </span>
                <span className="">Rs {product.productPrice|| "Price: N/A"}.00</span>
                  </div>
                </span>
              
              
                </div>
            
              </div>
           
              {/* <div className="flex justify-center text-white w-full items-center mt-4 rounded-full border border-green-500  bg-green-500 ">
                <a
                  href={`/yachtsDetail/${yacht.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-center  text-[14px]  px-2 py-2   transition duration-300"
                >
                  Order Now
                </a>
                <FaWhatsapp />
              </div> */}
              <div className="flex justify-between w-full items-center py-4 mt-2">
                <a
                  // href={`/productsDetail/${yacht.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border tracking-wider text-[14px]  text-gray-700  border-gray-400 rounded-full w-full text-center  px-4 py-1  transition duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
