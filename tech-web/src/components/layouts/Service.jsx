import React from "react";

export const Service = () => {
  return (
    <>
      <div className='flex justify-center my-20'>
        <img src='/assets/service.png' alt='service' />
      </div>
      <div className='flex md:flex-row flex-col justify-between px-32 my-40'>
        <div className='text-white basis-1/3'>
          <h1 className='text-4xl font-extrabold my-4'>In Their Words</h1>
          <p className='text-xl'>
            What people say about we helped them to that sweet ,sweet closing
            day
          </p>
          <button className='text-2xl p-4 rounded-lg border-4 border-[#488edf] my-16 hover:bg-[#488edf]'>
            <a href='https://g.page/r/CVuqP166glPFEAI/review'>
              Check Out More Review
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
