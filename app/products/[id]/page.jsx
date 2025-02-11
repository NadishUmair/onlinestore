"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use this hook to get the dynamic id from the URL
import { client } from '../../../sanity/lib/client';
import Loading from "../../loading"; // Assuming you have a loading spinner component

const ProductDetail = () => {
  const { id } = useParams(); // This hook fetches the product's id from the URL
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product details
  const fetchProductDetails = async () => {
    try {
      const query = `*[_type == "product" && _id == "${id}"]{
        _id,
        name,
        description,
        price,
        "productImg": image.asset->url,
        prevPrice,
        stock
      }`;
      const fetchedProduct = await client.fetch(query);
      setProduct(fetchedProduct[0]);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-24 px-4 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center  md:w-[50%] ">
    
        <div className="mt-8 md:flex justify-between w-full min-h-[500px]  ">
          <div className=" h-full md:w-[50%]">
            <img
              src={product.productImg}
              alt={product.name}
              className="min-h-[550px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center  p-4 md:w-[50%]">
          <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="text-xl font-semibold">
              Rs {product.price || "Price: N/A"}
            </div>
            <div className="text-sm text-gray-500">
              Previous Price: Rs {product.prevPrice}
            </div>
            <div className="mt-4 w-full border">
              <button
                href={`https://wa.me/+971589552731`}
                className="text-white bg-green-600 px-4 py-2 w-full rounded-full"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
