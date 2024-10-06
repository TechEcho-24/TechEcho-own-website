import React from "react";

export const Landing = () => {
  return (
    <>
      <div className='text-white pt-40 flex items-center justify-center gap-10'>
        <div className='basis-1/2'>
          <h3 className='text-2xl font-bold my-6'>
            Innovate now for a better{" "}
            <span className='text-blue-500'>Tomorrow</span>
          </h3>
          <h2 className='text-4xl font-bold my-2'>
            Transforming creative ideas into
          </h2>
          <h2 className='text-4xl font-bold text-blue-500 mb-8'>
            Digital Solutions
          </h2>
          <p className='text-sm leading-6'>
            TechEcho is an innovative IT startup specializing in app
            development, web development, and AI solutions. We provide
            high-quality, customized services to meet our clients' diverse
            technology needs, empowering businesses to thrive in the digital
            era.
          </p>
          <button className='btn'>
            <span className='btn-text'>Get More Details</span>
          </button>
        </div>
        <figure className='basis-1/2'>
          <img
            src='/assets/service/serviceLanding.png'
            alt='landing'
            className='w-full mx-auto'
          />
        </figure>
      </div>
      ;
    </>
  );
};
