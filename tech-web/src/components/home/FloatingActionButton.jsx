import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faRocketchat, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleCall = () => {
    window.location.href = "tel:8318999388";
  };
  const handleWhatsapp = () => {
    window.location.href = "https://wa.me/8318999388";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {showPopup && (
        <div className="bg-blue-500 text-white p-2 rounded-md mb-2 shadow-lg animate-bounce">
          Hi there, Welcome to TechEcho!
          <p className="absolute top-4 left-56 md-left-48 md-top-4">
            {" "}
            <FontAwesomeIcon
              className="text-4xl text-blue-500 "
              icon={faSortDown}
            />
          </p>
        </div>
      )}

      <button
        className={`bg-blue-500 text-white md:p-7 p-2 mb-1 md:text-2xl  mb-2  text-lg rounded-full shadow-lg focus:outline-none ${
          isOpen ? "rotate-90 bg-red-500" : ""
        } `}
        onClick={handleToggle}
      >
        {isOpen ? (
          <FontAwesomeIcon
            className="md:text-4xl text-3xl flex justify-center items-center"
            icon={faCircleXmark}
          />
        ) : (
          <FontAwesomeIcon
            className="md:text-4xl text-3xl flex justify-center items-center"
            icon={faRocketchat}
          />
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col gap-3 mb-4">
          <button
            className="bg-green-500 text-white md:p-7 p-2 md:text-2xl  text-lg rounded-full shadow-lg focus:outline-none"
            onClick={handleCall}
          >
            <FontAwesomeIcon
              className="md:text-4xl text-3xl flex justify-center items-center"
              icon={faPhone}
            />
          </button>
          <button
            className="bg-green-600 text-white md:p-7 p-2 rounded-full shadow-lg focus:outline-none"
            onClick={handleWhatsapp}
          >
            <FontAwesomeIcon
              className="md:text-5xl text-3xl flex justify-center items-center"
              icon={faWhatsapp}
            />
          </button>
        </div>
      )}
    </div>
  );
};
