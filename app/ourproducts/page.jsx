"use client"
import React, { useEffect, useState } from 'react';
import { MdOutlineBedroomChild } from 'react-icons/md';
import axios from 'axios';

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track if images are loading

  const AllProducts = async () => {
    console.log("Fetching products...");
    try {
      const response = await axios.get("https://store-backend-umber.vercel.app/api/product/all-products");
      console.log("response", response);
      setProducts(response?.data.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    AllProducts();
  }, []);

  // Handle image loading
  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when all images are loaded
  };

  return (
    <section>
      <div className="relative w-full h-[90vh]">
        <img src="/Assets/overall-hero.jpg" className="h-full w-full object-cover" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>
        <div className="inset-0 absolute flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white tracking-wider mb-12">
            Our Products
          </h1>
        </div>
      </div>

      <div className="py-16 px-4 bg-gray-100" id="ouryachts">
        {/* Show loading spinner if images are still loading */}
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-70 z-50">
            <div className="animate-spin border-4 border-t-4 border-gray-900 w-16 h-16 rounded-full"></div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product, index) => (
            <a
              href={`/yachtsDetail/${product?.slug}`}
              key={index}
              className="bg-white rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with onLoad to track when it's loaded */}
              <img
                src={product.img}
                alt={product?.name}
                className="w-full h-64 object-cover rounded-t-xl"
                onLoad={handleImageLoad} // Trigger handleImageLoad when image is loaded
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{product?.name}</h2>
                <div className="text-gray-600 text-sm mb-4 flex flex-wrap gap-4">
                  <p><strong>Length:</strong> {product?.length || "N/A"}</p>
                  <p className="flex items-center gap-1"><MdOutlineBedroomChild /> <strong>Bedrooms:</strong> {product.bedRooms}</p>
                  <p><strong>Bathrooms:</strong> {product?.washRooms}</p>
                  {product.kitchen && <p><strong>Kitchen:</strong> {product?.kitchen}</p>}
                  {product.persons && <p><strong>Capacity:</strong> {product?.persons} persons</p>}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-semibold text-gray-800">{product?.perhour || "Price: N/A"}</p>
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
