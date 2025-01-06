import ProductsApi from '@/app/api/productsData';
import Image from 'next/image';
import React from 'react';

const Products = () => {
  return (
    <section data-aos="fade-up" className='py-[4rem] flex flex-col justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-4 w-[90%] gap-4'>
        {ProductsApi.map((item, index) => {
          return (
            <div 
              key={index} 
              className='bg-white transform transition-transform duration-300 hover:scale-125 hover:-translate-y-4 shadow-lg hover:shadow-4xl hover:z-10 rounded-lg overflow-hidden'
            >
              <div className='h-[30px] relative border border-red-800'>
                <Image
                  src={item?.img} 
                  layout="fill"
                  loading='lazy'
                  style={{ objectFit: 'cover' }}
                  className='transition-all duration-300 ease-in-out' 
                  alt={item.title} 
                />
              </div>
              <div className='w-full h-[3rem] flex flex-col justify-center items-center'>
                <h1 className='text-[#ff0000] text-center font-semibold tracking-wider'>{item.title}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Products;
