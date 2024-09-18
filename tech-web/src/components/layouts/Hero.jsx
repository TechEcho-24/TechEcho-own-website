import React from "react";
import { ThreeScene } from "./Earth";

export const Hero = () => {
  return (
    <>
      <div className='h-screen bg-black overflow-x-hidden relative'>
        <ThreeScene />
        {/* slogan  */}
        <h1 className='glossy-text absolute top-3/4 right-48'>
          # Bring life to your vision
        </h1>
      </div>
      {/* title  */}
      <div className='absolute left-10 top-1/3 text-white z-0'>
        <h3 className='gradient-text font-bold text-4xl my-4'>
          Design Your Digital Identity
        </h3>
        <h1 className='text-6xl font-extrabold w-1/2 uppercase my-4'>
          Next Generation software{" "}
          <span className='text-purple-500'>services</span> for your{" "}
          <span className='text-purple-500'>business</span>.
        </h1>
        <p className='text-sm '>
          We are committed towards transforming ideas into tangible solutions
        </p>
        <button className='text-2xl p-4 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-200 font-semibold rounded-lg my-6 hover:p-5'>
          Explore Now
        </button>
      </div>
      <div className='flex items-center absolute bottom-4 right-5 bg-white rounded p-2'>
        <div className='mx-1'>
          <img src='/assets/google.png' alt='' className='w-10 h-10' />
        </div>
        {/* reviews  */}
        <div className='mx-1'>
          <p className='font-bold'>We love our community</p>
          <hr className='bg-gray-500 h-px border-0 my-1' />
          <div className='flex'>
            <p>450 Google Reviews |</p>
            <span className='font-bold'>4.7</span>
          </div>
        </div>
        {/* ratings */}
        <div className='flex items-center mx-1'>
          <img src='/assets/star.png' alt='' className='w-9 h-9' />
          <img src='/assets/star.png' alt='' className='w-9 h-9' />
          <img src='/assets/star.png' alt='' className='w-9 h-9' />
          <img src='/assets/star.png' alt='' className='w-9 h-9' />
          <img src='/assets/star.png' alt='' className='w-9 h-9' />
        </div>
        <div className='bg-yellow-400 absolute top-14 right-3 px-3 py-1 rounded-tl-full rounded-br-full cursor-pointer'>
          <p className='font-bold'>Leave Us A Review</p>
        </div>
      </div>
    </>
  );
};
