import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToggleSidePanel from "./ToggleSidePanel";

export const Navbar = () => {
  let [activePage, setActivePage] = useState("home");
  let [isScrolled, setIsScrolled] = useState("false");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
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
    // todo: fix the layout in mobile screens
    <div
      className={`flex justify-between items-center py-6 px-8 fixed z-40 w-full ${
        isScrolled ? "backdrop-blur-3xl" : "bg-transparent"
      }`}
    >
      <div onClick={() => setActivePage("home")}>
        <Link to={"/"} className='flex items-center'>
          <img src='/assets/logo.png' alt='' className='object-contain' />
          <span className='md:text-2xl text-xl text-white text-shadow font-semibold mt-1 ml-2'>
            TechEcho
          </span>
        </Link>
      </div>
      <ToggleSidePanel activePage={activePage} setActivePage={setActivePage} />
      <ul className='xl:flex navbar hidden'>
        <li
          onClick={() => setActivePage("about")}
          className={
            activePage === "about"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          <Link to={"/about"}>About Us</Link>
        </li>
        <li
          onClick={() => setActivePage("service")}
          className={
            activePage === "service"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          <Link to={"/services"}>Services</Link>
        </li>
        <li
          onClick={() => setActivePage("carrier")}
          className={
            activePage === "carrier"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          <Link to={"/career"}>Career</Link>
        </li>
        <li
          onClick={() => setActivePage("contact")}
          className={
            activePage === "contact"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          <Link to={"/about"}>Contact Us</Link>
        </li>
        <button
          className='border-2 border-[#06EFFA] text-white px-6 py-2 ml-8 text-xl cursor-pointer rounded-md'
          onClick={() => setActivePage("login")}
        >
          <Link to={"/signIn"}>
            {" "}
            <span className='mr-2'>Login</span>
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        </button>
      </ul>
    </div>
  );
};
