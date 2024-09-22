import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
let data = [
  {
    index: 0,
    service: "App Development",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " What people say about we helped them to that sweet ,sweet closday What people say about we helped them to that sweet ,swe closing day Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita",
    image: "/assets/appDev.png",
  },
  {
    index: 1,
    service: "Web Development",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " What people say about we helped them to that sweet ,sweet closday What people say about we helped them to that sweet ,swe closing day Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita",
    image: "/assets/webDevelopment.png",
  },
  {
    index: 2,
    service: "AI Development",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " What people say about we helped them to that sweet ,sweet closday What people say about we helped them to that sweet ,swe closing day Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita",
    image: "/assets/ai.png",
  },
  {
    index: 3,
    service: "Social Media Marketing",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " What people say about we helped them to that sweet ,sweet closday What people say about we helped them to that sweet ,swe closing day Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita",
    image: "/assets/socialMedia.png",
  },
  {
    index: 4,
    service: "Chatbot",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " What people say about we helped them to that sweet ,sweet closday What people say about we helped them to that sweet ,swe closing day Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita",
    image: "/assets/chatbot.png",
  },
];

export const Service = () => {
  let [activeCardIndex, setActiveCardIndex] = useState(1);

  const handleNext = () => {
    setTimeout(
      setActiveCardIndex(
        (prevIndex) => (prevIndex + 1 + data.length) % data.length
      ),
      1000
    );
  };

  const handlePrevious = () => {
    setTimeout(
      setActiveCardIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      ),
      1000
    );
  };

  const getDisplayedCard = () => {
    let displayedCard = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeCardIndex + i + data.length) % data.length;
      displayedCard.push(data[index]);
    }
    return displayedCard;
  };

  let selectedCard = data[activeCardIndex];
  return (
    <>
      <div className='flex justify-center my-20'>
        <img src='/assets/service.png' alt='service' />
      </div>
      <div className='flex md:flex-row flex-col justify-between px-32 my-40 items-center'>
        <div className='text-white basis-1/3'>
          <h1 className='text-4xl font-extrabold my-4'>
            {selectedCard.service}
          </h1>
          <p className='text-xl'>{selectedCard.detail}</p>
          <button className='text-2xl p-4 rounded-lg border-4 border-[#488edf] my-16 hover:bg-[#488edf]'>
            View More
          </button>
        </div>
        <div className='basis-2/3 relative flex items-center'>
          <button onClick={handlePrevious} className='absolute left-20 z-10'>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='text-white text-3xl border rounded-full px-4 p-2 bg-slate-500 hover:bg-slate-900'
            />
          </button>
          <div className='flex overflow-x-hidden'>
            {getDisplayedCard().map((card, index) => {
              return (
                <div
                  className={`text-white p-8 rounded-lg bg-[#3F3D56] w-[25rem] relative h-[38rem] transition duration-1000 ease-in-out ${
                    index === 1 ? "" : "opacity-40 scale-75"
                  }`}
                >
                  <h2 className='text-3xl font-bold my-4'>{card.service}</h2>
                  <p className='text-xl py-8'>{card.description}</p>
                  <figure>
                    <img src={card.image} alt='card' />
                  </figure>
                </div>
              );
            })}
          </div>
          <button onClick={handleNext} className='absolute right-20'>
            <FontAwesomeIcon
              icon={faChevronRight}
              className='text-white text-3xl border rounded-full px-4 p-2 bg-slate-500 hover:bg-slate-900'
            />
          </button>
        </div>
      </div>
    </>
  );
};
