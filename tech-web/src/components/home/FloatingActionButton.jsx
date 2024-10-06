import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faRocketchat, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowMessage(true); // Show popup message when the button is clicked
  };

  const handleCall = () => {
    window.location.href = "tel:8318999388";
  };

  const handleWhatsapp = () => {
    window.location.href = "https://wa.me/8318999388";
  };

  // Automatically close popup after 5 seconds when it's opened
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
        setShowMessage(false); // Hide popup message after 5 seconds
      }, 5000); // 5 seconds
    }
    return () => clearTimeout(timer); // Clear timer on component unmount or if isOpen changes
  }, [isOpen]);

  // Close the message popup automatically after 5 seconds
  useEffect(() => {
    if (showMessage) {
      const messageTimer = setTimeout(() => {
        setShowMessage(false);
      }, 5000); // 5 seconds
      return () => clearTimeout(messageTimer);
    }
  }, [showMessage]);

  return (
    <div className='fixed bottom-6 right-6 flex flex-col items-end'>
      {/* Floating Button */}
      <button
        className={`bg-blue-500 text-white p-9 mb-1 text-2xl rounded-full shadow-lg focus:outline-none ${
          isOpen ? "rotate-90 bg-red-500" : ""
        } `}
        onClick={handleToggle}
      >
        {isOpen ? (
          <FontAwesomeIcon className='text-4xl' icon={faCircleXmark} />
        ) : (
          <FontAwesomeIcon className='text-4xl' icon={faRocketchat} />
        )}
      </button>

      {/* Action Buttons */}
      {isOpen && (
        <div className='flex flex-col gap-3 mb-4'>
          <button
            className='bg-green-500 text-white p-9 text-2xl rounded-full shadow-lg focus:outline-none'
            onClick={handleCall}
          >
            <FontAwesomeIcon className='text-4xl' icon={faPhone} />
          </button>
          <button
            className='bg-green-600 text-white p-9 rounded-full shadow-lg focus:outline-none'
            onClick={handleWhatsapp}
          >
            <FontAwesomeIcon className='text-5xl' icon={faWhatsapp} />
          </button>
        </div>
      )}

      {/* Popup Message */}
      {showMessage && (
        <div className='absolute bottom-20 right-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
          <p>Welcome to TechEcho</p>
        </div>
      )}
    </div>
  );
};
