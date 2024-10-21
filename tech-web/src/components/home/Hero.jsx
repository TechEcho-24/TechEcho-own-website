import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  let elmRefs = useRef();

  useGSAP(() => {
    gsap.from(elmRefs.current, {
      x: 50,
      opacity: 0,
      duration: 2,
      delay: 0.1,
    });
  });
  return (
    <div className='flex flex-col md:flex-row justify-between py-10 md:py-20 md:pl-20 px-4 h-screen items-center'>
      <div
        ref={elmRefs}
        className='flex flex-col justify-center items-center md:block mt-20 md:mt-32'
      >
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
        <button className='btn text-white'>
          <span className='btn-text'>Explore Now</span>
        </button>
        <Link className='btn text-white ml-4' to={"/schedule"}>
          <span className='btn-text'>Schedule a Demo</span>
        </Link>
      </div>
      <figure className='flex flex-col items-center md:mt-0'>
        <img src='/assets/tech.png' alt='tech' />
        <blockquote className='glossy-text text-base md:text-2xl'>
          # Bring life to your vision
        </blockquote>
      </figure>
    </div>
  );
};
