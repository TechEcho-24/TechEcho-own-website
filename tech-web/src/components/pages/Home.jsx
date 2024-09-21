import React from "react";
import { Hero } from "../layouts/Hero";
import { Stats } from "../layouts/Stats";
import { Intro } from "../layouts/Intro";
import { Service } from "../layouts/Service";

export const Home = () => {
  return (
    <>
      <div className='relative'>
        <Hero />
        <Stats />
        <Intro />
        <Service />
      </div>
    </>
  );
};
