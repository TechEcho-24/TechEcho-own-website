import React from "react";
import { Hero } from "../layouts/Hero";
import Stats from "../layouts/Stats";

export const Home = () => {
  return (
    <>
      <div className='relative overflow-x-hidden'>
        <Hero />
        <Stats />
      </div>
    </>
  );
};
