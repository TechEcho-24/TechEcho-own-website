import React from "react";
import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { Intro } from "../components/home/Intro";
import { Service } from "../components/home/Service";
import { About } from "../components/home/About";
import { Contact } from "../components/home/Contact";
import { Footer } from "../components/home/Footer";

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
        <Footer />
      </div>
    </>
  );
};
