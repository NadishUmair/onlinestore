// import { client } from '../lib/sanity'; 
// import Image from 'next/image';
// import React from 'react';

// const Products = ({ products }) => {
//   return (
//     <section data-aos="fade-up" className="py-[4rem] flex flex-col justify-center items-center">
//       <div className="grid grid-cols-1 md:grid-cols-4 w-[90%] gap-4">
//         {products.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="bg-white transform transition-transform duration-300 hover:scale-125 hover:-translate-y-4 shadow-lg hover:shadow-4xl hover:z-10 rounded-lg overflow-hidden"
//             >
//               <div className="h-[30px] relative border border-red-800">
//                 <Image
//                   src={item?.image?.asset?.url} 
//                   layout="fill"
//                   loading="lazy"
//                   style={{ objectFit: 'cover' }}
//                   className="transition-all duration-300 ease-in-out"
//                   alt={item.name}
//                 />
//               </div>
//               <div className="w-full h-[3rem] flex flex-col justify-center items-center">
//                 <h1 className="text-[#ff0000] text-center font-semibold tracking-wider">{item.name}</h1>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };


// export async function getStaticProps() {
  
//   const query = `*[_type == "product"]{
//     _id,
//     name,
//     slug,
//     description,
//     price,
//     "image": image.asset->url, // Retrieve image URL from Sanity
//     category,
//     stock,
//     rating
//   }`;

//   const products = await client.fetch(query);

//   return {
//     props: {
//       products, 
//     },
//     revalidate: 60, 
//   };
// }

// export default Products;
