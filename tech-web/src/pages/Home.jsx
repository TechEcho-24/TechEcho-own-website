import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { Intro } from "../components/home/Intro";
import { Service } from "../components/home/Service";
import { About } from "../components/home/About";
import { ContactForm } from "../components/home/ContactForm";

export const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <Stats />
        <Intro />
        <Service />
        <About />
        <ContactForm />
      </div>
    </>
  );
};
