import React from "react";
import { Hero } from "../layouts/Hero";
import { Stats } from "../layouts/Stats";
import { Intro } from "../layouts/Intro";
import { Service } from "../layouts/Service";
import { About } from "../layouts/About";
import { Contact } from "../layouts/Contact";

export const Home = () => {
  return (
    <>
      <div className='relative'>
        <Hero />
        <Stats />
        <Intro />
        <Service />
        <About />
        <Contact />
      </div>
    </>
  );
};
