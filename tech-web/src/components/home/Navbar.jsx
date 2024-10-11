import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleSidePanel from "./ToggleSidePanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navbar = () => {
  let [activePage, setActivePage] = useState("home");
  let [isScrolled, setIsScrolled] = useState("false");
  let location = useLocation();

  useGSAP(() => {
    gsap.from("li", {
      y: -50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
    });
  });

  useEffect(() => {
    let path = location.pathname.split("/")[1];
    setActivePage(path);
  }, [location]);
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
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1  hover:border-b-4 border-b-[#06EFFA]"
          }
        >
          <Link to={"/about"}>About Us</Link>
        </li>
        <li
          onClick={() => setActivePage("service")}
          className={
            activePage === "service"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1  hover:border-b-4 border-b-[#06EFFA]"
          }
        >
          <Link to={"/service"}>Services</Link>
        </li>
        <li
          onClick={() => setActivePage("carrier")}
          className={
            activePage === "career"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1  hover:border-b-4 border-b-[#06EFFA]"
          }
        >
          <Link to={"/career"}>Career</Link>
        </li>
        <li
          onClick={() => setActivePage("contact")}
          className={
            activePage === "contact"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1  hover:border-b-4 border-b-[#06EFFA]"
          }
        >
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <button
          className={`border-2 border-blue-500 text-white px-6 py-2 ml-8 text-xl hover:bg-blue-500 cursor-pointer rounded-md ${
            activePage === "login" ? "bg-blue-500 border-none" : ""
          }`}
          onClick={() => setActivePage("login")}
        >
          <Link to={"/login"}>
            {" "}
            <span className='mr-2'>Login</span>
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        </button>
      </ul>
    </div>
  );
};
