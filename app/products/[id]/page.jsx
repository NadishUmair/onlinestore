"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBed, FaShower, FaUsers, FaClock, FaTag, FaStar, FaWhatsapp } from 'react-icons/fa';
import products from "@/app/api/yachtsData";  // Assuming the updated products array is stored here
import { CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnThin } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
import { useParams } from "next/navigation";
import axios from "axios";
export default function Page() {
  const params=useParams();
  const [product, setProduct] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  const [unwrappedParams, setUnwrappedParams] = useState(null);
  const [count,setCount]=useState(0);
  const whatsappNumber = "+971589552731";
  const id=params.id;
  console.log("id",id);
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/product/single-product/${id}`
      );
      console.log("response",response.data.prdouct);
      setProduct(response?.data?.product);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails(id); 
    }
  }, [id]);
  
  useEffect(() => {
  

  fetchProductDetails();
  }, [params]);

  const handleImageClick = (imageUrl) => {
    setActiveImage(imageUrl);
  };

  if (isloading) {
    return <div className="h-[90vh]  flex flex-col justify-center items-center">
      <h1 className="text-[25px] tracking-wider">Loading...</h1>
    </div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  console.log("product", product);

  return (
    <section className="flex h-auto  md:h-[100vh]   py-[50px]  flex-col justify-end items-center">
      {/* <div className="relative w-full h-[90vh]">
        <img src="/Assets/overall-hero.jpg" className="h-full w-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>
        <div className="inset-0 absolute flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white tracking-wider mb-12">
            {product?.name}
          </h1>
        </div>
      </div> */}

      <div className="h-[80%]   md:w-[60%] md:flex justify-between  ">
        {/* Image Gallery Section */}
        <div className="md:w-[40%] h-full  ">
          <div className="mb-6 h-full px-4 overflow-hidden">
            <img
              src={`https://store-backend-umber.vercel.app/${product?.productImg}`}
              alt="Active Product"
              className="w-full rounded-md h-full hover:scale-105 ease-in-out transition-all duration-300  object-cover "
            />
          </div>

    
        </div>

        {/* Product Details Section */}
        <div className="p-8 md:w-[50%]  flex flex-col justify-center  md:p-4 transition-transform transform">
          <div>
            <h1 className=" font-extrabold text-gray-800 mb-4">{product.productName}</h1>

            <div className="space-y-4">
              

            

             

           

            <div className="text-sm py-2 font-light text-gray-800 flex ">
                <span className="text-red-600 line-through mr-2">Rs {product.prevPrice} </span>
                <span>Rs {product.productPrice|| "Price: N/A"}</span>
                  <div className="ml-2 bg-black text-white w-[50px] rounded-sm text-center tracking-wide">{product.discount}% </div>
                </div>

              <div className="flex items-center  text-[14px] justify-between px-2  rounded-full  text-gray-600 border border-gray-900 w-[100px]">
               <button onClick={()=>setCount(count > 0 ? count-1 : 0)}>-</button>
                 {count}
               <button onClick={()=>setCount(count < 5 ? count+1 : 5)}>+</button>
              </div>
               <div className="flex justify-between py-4">
                <div className="flex flex-col justify-center items-center gap-1">
                  <span><CiDeliveryTruck  className="text-[20px]"/></span>
                  <h4 className="text-[12px] font-bold">Cash on Delivery</h4>
                  <p className="text-[10px] text-gray-600">All over Pakistan</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <span><PiKeyReturnThin className="text-[20px] font-light"  /></span>
                  <h4 className="text-[12px] font-bold">Easy Return</h4>
                  <p className="text-[10px] text-gray-600">Return with ease </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <span><IoBagCheckOutline className="text-[20px] font-light"  /></span>
                  <h4 className="text-[12px] font-bold">Secure Checkout</h4>
                  <p className="text-[10px] text-gray-600">Secure Payment </p>
                </div>
               </div>
              <div className="flex  text-lg text-gray-600 py-2">
                <p className="text-sm leading-5">{product.description}</p> 
              </div>
            </div>

            {/* Order Now Button */}
            <div className="flex justify-center text-white w-full rounded-full items-center mt-4 bg-green-600">
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 transition duration-300"
              >
                Order Now <FaWhatsapp className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
