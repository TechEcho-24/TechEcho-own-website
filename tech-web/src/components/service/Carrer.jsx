import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const Carrer = () => {
  useGSAP(() => {
    gsap.from("h2", {
      opacity: 0,
      x: 50,
      duration: 2,
      scrollTrigger: {
        trigger: "h2",
      },
    });
  });
  return (
    <div className='my-32'>
      <figure className='flex justify-center items-center'>
        <img src='/assets/carrierHead.png' alt='career' />
      </figure>
      <h2 className='text-white text-2xl md:text-7xl text-center mt-20 font-extrabold'>
        Coming Soon...
      </h2>
    </div>
  );
};
