import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
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
    // todo: fix the layout in mobile screens
    <div
      className={`flex justify-between items-center py-6 px-8 ${
        isScrolled ? "backdrop-grayscale-0" : "bg-transparent"
      }`}
    >
      <div className="flex items-center" onClick={() => setActivePage("home")}>
        <img src="/assets/logo.png" alt="" className="w-full" />
        <span className="text-2xl text-white text-shadow font-semibold mt-1 ml-2">
          TechEcho
        </span>
      </div>
      <ToggleSidePanel />
      <div className="flex">
      <ul className="xl:flex navbar hidden">
        <li
          onClick={() => setActivePage("about")}
          className={
            activePage === "about"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          About us
        </li>
        <li
          onClick={() => setActivePage("service")}
          className={
            activePage === "service"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          Services
        </li>
        <li
          onClick={() => setActivePage("carrer")}
          className={
            activePage === "carrer"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          Career
        </li>
        <li
          onClick={() => setActivePage("contact")}
          className={
            activePage === "contact"
              ? "active cursor-pointer text-white ml-8 text-xl py-2"
              : "cursor-pointer text-white ml-8 text-xl py-2 mt-1"
          }
        >
          Contact Us
        </li>
      </ul>
        <button
          className="border-2 border-[#06EFFA] text-white px-6 py-2 ml-8 text-xl cursor-pointer rounded-md"
          onClick={() => setActivePage("login")}
        >
          <span className="mr-2">Login</span>
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
       </div>
    </div>
  );
};
