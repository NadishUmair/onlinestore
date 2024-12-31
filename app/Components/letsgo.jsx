import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
const LetsGo = () => {
  return (
    <section className='beat_con p-4 md:p-8 md:flex flex-col justify-center items-center '>
    <div className='h-[90%] md:flex justify-between items-center'>
        <div className='md:w-[50%]'>
            <h1 className=' font-bold text-[2rem]'>Set Sail on Your Dream Yacht Today</h1>
            <div className='flex p-2 gap-2'>
                <div>
                    <FaRegCheckCircle className='text-[1.5rem]' />
                </div>
                <div>
                    <h3 className='font-semibold'>Exclusive Luxury Yachts</h3>
                    <p className=''>Choose from a wide selection of high-end yachts for every occasion, from intimate getaways to lavish events.</p>
                </div>
            </div>
            <div className='flex p-2 gap-2'>
                <div>
                    <FaRegCheckCircle className='text-[1.5rem]' />
                </div>
                <div>
                    <h3 className='font-semibold'>Seamless Booking Experience</h3>
                    <p className=''>Browse through our fleet of yachts and book your next adventure in just a few clicks. We make yacht booking effortless.</p>
                </div>
            </div>
            <div className='flex p-2 gap-2'>
                <div>
                    <FaRegCheckCircle className='text-[1.5rem]' />
                </div>
                <div>
                    <h3 className='font-semibold'>Customizable Itineraries</h3>
                    <p className=''>Plan your perfect trip with tailored routes and activities. Whether you want to explore hidden beaches or cruise the coast, we’ve got you covered.</p>
                </div>
            </div>
            <div className='flex p-2 gap-2'>
                <div>
                    <FaRegCheckCircle className='text-[1.5rem]' />
                </div>
                <div>
                    <h3 className='font-semibold'>Dedicated Support Team</h3>
                    <p className=''>Our expert team is available 24/7 to assist you with your booking and ensure everything goes smoothly from start to finish.</p>
                </div>
            </div>
            <div className='px-8'>
                <button className='font-bold  p-2 rounded-md'>Book Your Yacht</button>
            </div>
        </div>
        <div className='md:w-[50%] mt-8 md:mt-0'>
            <img src="/Assets/Boats/jacuzzi/jacuzzi1.jpg" className='w-[583px] h-[370px] object-cover rounded-md border-[2px] border-primarygray' alt="Luxury Yacht" />
        </div>
    </div>
</section>

  )
}

export default LetsGo;