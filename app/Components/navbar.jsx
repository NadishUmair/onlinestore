"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
   <section className='fixed bg-white  bg-opacity-95 top-0 z-20 w-full  items-center bg-transparent  '>
 
     <div className=' w-full flex justify-between items-center h-auto   px-2 md:px-4'>
       
       <div className='text-white  flex w-[60%]  md:w-[20%] '>
         <img src="/Assets/shopcircle.PNG" className=' w-[100px] md:w-[200px] h-[60px] md:h-[120px] object-cover' alt="Logo" />
       {/* <div className='bg-white border p-2'>
       <img src="/Assets/candaflag.png" className='w-[100px] md:w-[120px] h-[60px] object-cover' alt="canadaflag" />
       </div> */}
       </div>
       <nav className='hidden md:block w-[70%] align-center'>
         <ul className='flex justify-between items-center w-[60%] bg-[#264846] text-white/70 p-4 rounded-full '>
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/">Home</Link>
           </li>
        
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/products">Our Products</Link>
           </li>
         
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/AboutUs">About</Link>
           </li>
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/ContactUs">Contact</Link>
           </li>
         
         </ul>
       </nav>

       <div className='block md:hidden' onClick={handleShowMenu}>
         {showMenu ? (
           <MdOutlineClose className=' text-[2.5rem] cursor-pointer' />
         ) : (
           <IoMdMenu className=' text-[2.5rem] cursor-pointer' />
         )}
       </div>
       <div className={`w-full left-0 p-2 bg-white ${showMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out md:hidden absolute border top-[100%]`}>
         <ul className='flex flex-col gap-4 font-semibold w-full '>
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/" onClick={() => setShowMenu(false)}>Home</Link>
           </li>
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/#services" onClick={() => setShowMenu(false)}>Services</Link>
           </li>
           
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/#ouryachts" onClick={() => setShowMenu(false)}>Our Products</Link>
           </li>
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/AboutUs" onClick={() => setShowMenu(false)}>About</Link>
           </li>
           <li className='cursor-pointer transition-all ease-in-out duration-300'>
             <Link href="/ContactUs" onClick={() => setShowMenu(false)}>Contact</Link>
           </li>
         
         </ul>
       </div>
     </div>
   </section>
  );
};

export default Navbar;
