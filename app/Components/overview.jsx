"use client"
import React from 'react'
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

const OverView = () => {
  return (
    <section className='md:h-[90vh]  p-8 md:p-0 md:flex flex-col justify-center items-center'>
        <div className='w-[95%]   h-full md:flex justify-between'>
        <div className='md:w-[50%]  flex flex-col  justify-center items-center'>
        <div className='flex flex-col gap-2'>
  <h3 className='text-lightgray'>#LUXURYONWATER</h3>
  <h1 className='text-[2rem] font-bold '>Yes, That Yacht experience was booked through us.</h1>
  <h4 className='text-[1.5rem] '>Thousands of clients trust us to provide unforgettable luxury yacht services.</h4>
  <div className='w-[250px] mt-4'>
    <a href="/#ouryachts" className='flex cursor-pointer justify-between rounded-md items-center bg-secondary-black border-secondary-gray border-[1.5px] w-full h-full p-2'>
      <span>Your dream yacht is waiting</span>
      <IoIosArrowForward className='text-[1.5rem]' />
    </a>
  </div>
</div>

        </div>
<div className='md:w-[50%] py-[20px] flex flex-col relative mt-8 md:mt-0 h-[300px] md:h-full overflow-hidden gap-8  px-4'>


  
<div className='w-[100%] md:w-[70%] h-[50%]'>
  <img src="/Assets/Boats/jacuzzi/jacuzzi1.jpg" className='h-full w-full rounded-md' alt="Jacuzzi" />
</div>
<div className='flex justify-end'>
  <div className='w-[70%] md:w-[50%]'>
  <img src="/Assets/overview1.jpg" className='h-full w-full rounded-md' alt="Overview Image" />
  </div>
</div>

</div>
       
       
       
        </div>
        
    </section>
  )
}

export default OverView;