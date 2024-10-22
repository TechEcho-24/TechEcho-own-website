import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ToggleSidePanel({ activePage, setActivePage }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='z-20 xl:hidden'>
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} className='text-[#488EDF] text-3xl' />
        ) : (
          <FontAwesomeIcon icon={faBars} className='text-white text-3xl' />
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 pt-14 bg-black p-4 transition-transform transform z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <ul>
          <li
            className={`my-4 active:text-[#488EDF] pl-8 ${
              activePage === "about"
                ? "border-l-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActivePage("about");
              setIsOpen(false);
            }}
          >
            {" "}
            <Link to='/about'>About Us</Link>
          </li>
          <li
            className={`my-4 active:text-[#488EDF] pl-8 ${
              activePage === "service"
                ? "border-l-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActivePage("service");
              setIsOpen(false);
            }}
          >
            {" "}
            <Link to='/service'>Services</Link>
          </li>
          <li
            className={`my-4 active:text-[#488EDF] pl-8 ${
              activePage === "career"
                ? "border-l-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActivePage("career");
              setIsOpen(false);
            }}
          >
            {" "}
            <Link to='/career'>Career</Link>
          </li>
          <li
            className={`my-4 active:text-[#488EDF] pl-8 ${
              activePage === "contact"
                ? "border-l-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActivePage("contact");
              setIsOpen(false);
            }}
          >
            {" "}
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li
            className={`my-4 active:text-[#488EDF] pl-8 ${
              activePage === "help"
                ? "border-l-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActivePage("help");
              setIsOpen(false);
            }}
          >
            {" "}
            <Link to='/help'>Help</Link>
          </li>
          <li
            className={`my-4 active:text-[#488EDF] pl-8 ${
              activePage === "login"
                ? "border-l-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActivePage("login");
              setIsOpen(false);
            }}
          >
            {" "}
            <Link to='/login'>Sign In</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ToggleSidePanel;