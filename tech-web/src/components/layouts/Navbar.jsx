import React, { useState, useEffect } from "react";
import ToggleSidePanel from "./ToggleSidePanel";

export const Navbar = () => {
  let [activePage, setActivePage] = useState("home");
  let [isScrolled, setIsScrolled] = useState("false");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    console.log(isScrolled);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div
      className={`flex justify-between items-center py-6 px-8 ${
        isScrolled ? "backdrop-grayscale-0 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='flex items-center' onClick={() => setActivePage("home")}>
        <img src='/assets/logo.png' alt='' className='w-full' />
        <span className='text-4xl text-white text-shadow font-semibold mt-1 ml-2'>
          TechEcho
        </span>
      </div>
      <ToggleSidePanel />
      <ul className='xl:flex navbar hidden'>
        <li
          onClick={() => setActivePage("about")}
          className={
            activePage === "about"
              ? "active cursor-pointer text-white ml-8 text-2xl py-2"
              : "cursor-pointer text-white ml-8 text-2xl py-2 mt-1"
          }
        >
          About us
        </li>
        <li
          onClick={() => setActivePage("service")}
          className={
            activePage === "service"
              ? "active cursor-pointer text-white ml-8 text-2xl py-2"
              : "cursor-pointer text-white ml-8 text-2xl py-2 mt-1"
          }
        >
          Services
        </li>
        <li
          onClick={() => setActivePage("carrer")}
          className={
            activePage === "carrer"
              ? "active cursor-pointer text-white ml-8 text-2xl py-2"
              : "cursor-pointer text-white ml-8 text-2xl py-2 mt-1"
          }
        >
          Carrer
        </li>
        <li
          onClick={() => setActivePage("contact")}
          className={
            activePage === "contact"
              ? "active cursor-pointer text-white ml-8 text-2xl py-2"
              : "cursor-pointer text-white ml-8 text-2xl py-2 mt-1"
          }
        >
          Contact Us
        </li>
        <li
          className='border-4 border-purple-600 text-white px-6 py-2 ml-8 text-2xl cursor-pointer rounded-md'
          onClick={() => setActivePage("login")}
        >
          Login
        </li>
      </ul>
    </div>
  );
};
