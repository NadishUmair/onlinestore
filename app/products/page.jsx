"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from '../../sanity/lib/client';
import Loading from "../loading";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        name,
        slug,
        description,
        price,
        "productImg": image.asset->url,
        prevPrice,
        category,
        stock
      }`;
  
      const fetchedProducts = await client.fetch(query);
      console.log("fetched",fetchedProducts);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <section className="py-24 px-4 " id="products">
          <div className="flex flex-col justify-center items-center ">
            <span className="w-[210px] text-center text-[30px] rounded-md py-3 font-bold">
              Our Products
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 ">
            {products?.map((product) => (
              <Link
                href={`/products/${product?._id}`}
                key={product?._id}
                className="bg-white max-h-[550px] hover:cursor-pointer overflow-hidden transform transition duration-300"
              >
                <div className="h-[80%] relative">
                  <Image
                    src={product?.productImg}
                    alt={product?.name}
                    width={500}
                    height={500}
                    objectFit="contain" // Prevents cropping while maintaining aspect ratio
                    className="w-full h-full hover:scale-105 transition-all ease-in-out duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="py-4 px-1 mt-2 h-[30%]">
                  <div className="flex justify-between items-center">
                    <span>
                      <h2 className="text-[12px] font-light text-gray-900 ">{product?.name}</h2>
                    </span>
                    <div className="flex items-center">
                      <span>
                        <div className="text-[12px] font-light text-gray-800">
                          {/* <span className="text-red-600 line-through mr-2">
                            Rs {product?.prevPrice}.00{" "}
                          </span> */}
                          <span>Rs {product?.price || "Price: N/A"}.00</span>
                        </div>
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between w-full items-center py-4 mt-2">
                    <a
                      href={`/products/${product.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border tracking-wider text-[14px] text-gray-700 border-gray-400 rounded-full w-full text-center px-4 py-1 transition duration-300"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
