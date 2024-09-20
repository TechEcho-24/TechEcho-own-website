import React, { useEffect, useState } from "react";

function AnimateNumber({ targetNumber }) {
  let [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev < targetNumber) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 80);
  }, [targetNumber]);

  return <span className='text-5xl font-bold'>{currentNumber}+ </span>;
}

function Stats() {
  return (
    <div className='flex justify-between md:flex-row flex-col items-center bg-gradient-to-b from-[#131b46] to-[#2c507b] text-white px-32 py-10'>
      <div className='my-4'>
        {/* <span className='text-5xl font-bold'>10+</span> */}
        <AnimateNumber targetNumber={10} />
        <p className='text-2xl mt-2'>Projects</p>
      </div>
      <div className='my-4'>
        <AnimateNumber targetNumber={20} />
        <p className='text-2xl mt-2'>Clients</p>
      </div>
      <div className='my-4'>
        <AnimateNumber targetNumber={60} />
        <p className='text-2xl mt-2'>Reviews</p>
      </div>
    </div>
  );
}

export default Stats;
