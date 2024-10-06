import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { Intro } from "../components/home/Intro";
import { Service } from "../components/home/Service";
import { About } from "../components/home/About";
import { Contact } from "../components/home/Contact";

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
