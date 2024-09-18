import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function ToggleSidePanel() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='z-10 xl:hidden'>
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} className='text-white text-3xl' />
        ) : (
          <FontAwesomeIcon icon={faBars} className='text-white text-3xl' />
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <li>About Us</li>
        <li>Services</li>
        <li>Carrer</li>
        <li>Contact Us</li>
      </div>
    </>
  );
}

export default ToggleSidePanel;
