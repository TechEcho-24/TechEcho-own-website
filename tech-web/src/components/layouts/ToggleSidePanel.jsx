import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ToggleSidePanel() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='z-10 xl:hidden'>
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} className='text-[#488EDF] text-3xl' />
        ) : (
          <FontAwesomeIcon icon={faBars} className='text-white text-3xl' />
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 mt-14 bg-black text-white p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <ul>
          <li className='text-gray-500 my-4 active:text-[#488EDF]'>
            {" "}
            <Link to='/about'>About Us</Link>
          </li>
          <li className='text-gray-500 my-4 active:text-[#488EDF]'>
            {" "}
            <Link to='/services'>Services</Link>
          </li>
          <li className='text-gray-500 my-4 active:text-[#488EDF]'>
            {" "}
            <Link to='/career'>Career</Link>
          </li>
          <li className='text-gray-500 my-4 active:text-[#488EDF]'>
            {" "}
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='text-gray-500 my-4 active:text-[#488EDF]'>
            {" "}
            <Link to='/signIn'>Sign In</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ToggleSidePanel;
