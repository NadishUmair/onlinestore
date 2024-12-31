import React from 'react';

const Pricing = () => {
  return (
    <section data-aos="fade-up" className='flex flex-col justify-center items-center bg-gray-50 py-12' id='pricing'>
      <h1 className='text-4xl font-bold text-gray-800 mb-12 ' >
        <span className='text-red-500'>Our</span> Pricing
      </h1>
      <div className='w-[90%] max-w-screen-lg'>
     
        <div className='grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='h-auto bg-white border border-gray-200 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-sm'>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Monthly Fire Inspection</h2>
            <p className='text-base text-gray-600'>Starting from</p>
            <p className='text-xl font-bold text-red-600'>$49</p>
          </div>
          <div className='h-auto bg-white border border-gray-200 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-sm'>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Annual Fire Inspection</h2>
            <p className='text-base text-gray-600'>Starting from</p>
            <p className='text-xl font-bold text-red-600'>$299</p>
          </div>
          <div className='h-auto bg-white border border-gray-200 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-sm'>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Kitchen Fire System Inspection</h2>
            <p className='text-base text-gray-600'>Starting from</p>
            <p className='text-xl font-bold text-red-600'>$279</p>
          </div>
          <div className='h-auto bg-white border border-gray-200 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-sm'>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Demand Maintenance</h2>
            <p className='text-base text-gray-600'>9am - 5pm</p>
            <p className='text-lg font-bold text-red-600'>$99 per hour</p>
            <p className='text-base text-gray-600'>After hours</p>
            <p className='text-lg font-bold text-red-600'>$149 per hour</p>
          </div>
          <div className='h-auto bg-white border border-gray-200 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-sm'>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Fire Monitoring</h2>
            <p className='text-base text-gray-600'>Starting from</p>
            <p className='text-xl font-bold text-red-600'>$29/monthly</p>
            <p className='text-base text-gray-600'>Equipment cost</p>
            <p className='text-xl font-bold text-red-600'>$1099</p>
          </div>
          <div className='h-auto bg-white border border-gray-200 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-sm'>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Fire Safety Plan</h2>
            <p className='text-base text-gray-600'>Starting from</p>
            <p className='text-xl font-bold text-red-600'>$699</p>
            <p className='text-base text-gray-600'>Online review</p>
            <p className='text-lg font-bold text-red-600'>$169</p>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0000] to-transparent bottom-0 left-0"></div>
    </section>
  );
}

export default Pricing;
