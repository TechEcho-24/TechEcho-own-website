// import React from "react";

export const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between py-10 md:py-20 md:pl-10 px-4'>
      <div className='my-auto flex flex-col justify-center items-center md:block'>
        <p className='gradient-text font-bold text-2xl my-4'>
          Design Your Digital Identity
        </p>
        <h1 className='text-3xl md:text-5xl text-center md:text-left text-white font-bold  uppercase my-6'>
          Next Generation software{" "}
          <span className='text-[#015698]'>services</span> for your{" "}
          <span className='text-[#015698]'>business</span>
        </h1>
        <p className='text-base text-center md:text-left text-[#06EFFA]'>
          We are committed towards transforming ideas into tangible solutions
        </p>
        <button className='text-2xl p-4 bg-gradient-to-r from-[#015698] via-[#0e79cb] to-[#4aa3e8] text-white font-semibold rounded-lg my-6 hover:p-5'>
          Explore Now
        </button>
      </div>
      <figure className='flex flex-col items-center mt-8 md:mt-0'>
        <img src='/assets/tech.png' alt='tech' />
        <blockquote className='glossy-text text-base md:text-2xl'>
          # Bring life to your vision
        </blockquote>
      </figure>
    </div>
  );
};
