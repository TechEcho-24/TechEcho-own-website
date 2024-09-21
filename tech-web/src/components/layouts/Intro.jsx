import React from "react";

export const Intro = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col py-32 items-center justify-between md:px-32 px-10'>
        <div className='text-white basis-1/2'>
          <h2 className='text-5xl font-extrabold my-6'>What We Offer</h2>
          <p className='text-2xl leading-10'>
            At TechEcho,we blend innovation with precision to deliver tailored
            IT solutions.From crafting seamless web experiences to harnessing
            cutting-edge technologies,our expert team is dedicated towards
            transforming ideas into impactful reality.Discover how we enhance
            your digital journey...
          </p>
          <button className='md:py-6 md:px-10 p-4 text-white border-4 border-[#488edf] my-14 md:text-4xl font-bold rounded-lg hover:bg-[#488edf]'>
            Connect With Us
          </button>
        </div>
        <div className='basis-5/12'>
          <img src='/assets/intro.svg' alt='' />
        </div>
      </div>
    </>
  );
};
