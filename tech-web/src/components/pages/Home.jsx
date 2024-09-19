import React from "react";
import { Hero } from "../layouts/Hero";
import { Navbar } from "../layouts/Navbar";
// import { ThreeScene } from "../layouts/Earth";

export const Home = () => {
  return (
    <>
      <div className='relative overflow-x-hidden'>
        <Navbar />
        <Hero />
      </div>
    </>
  );
};
