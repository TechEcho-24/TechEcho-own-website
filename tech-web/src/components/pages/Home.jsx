import React from "react";
import { Hero } from "../layouts/Hero";
import { Stats } from "../layouts/Stats";
import { Intro } from "../layouts/Intro";
import { Service } from "../layouts/Service";
import { About } from "../layouts/About";
import { Contact } from "../layouts/Contact";
import { Footer } from "../layouts/Footer";

export const Home = () => {
  return (
    <>
      <div className='relative container mx-auto'>
        <Hero />
        <Stats />
        <Intro />
        <Service />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
