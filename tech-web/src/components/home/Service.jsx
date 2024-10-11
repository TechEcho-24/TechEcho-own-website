import { useState } from "react";
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
      " TechEcho specializes in building high-performance mobile and desktop apps that deliver seamless user experiences across Android and iOS. We develop scalable, secure applications tailored to your business needs, offering end-to-end solutions from design to deployment, ensuring exceptional functionality and user engagement.",
    image: "/assets/appDev.png",
  },
  {
    index: 1,
    service: "Web Development",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " TechEcho creates dynamic, responsive websites using modern frameworks like React.js and Node.js. Our web development services focus on building scalable, secure platforms, including PWAs and e-commerce solutions, optimized for speed, SEO, and seamless user experiences across all devices.",
    image: "/assets/webDevelopment.png",
  },
  {
    index: 2,
    service: "AI Development",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " TechEcho provides advanced AI solutions, including machine learning, NLP, and predictive analytics. We help businesses automate tasks, optimize operations, and enhance decision-making with AI-powered systems. Our AI integration transforms workflows, enabling smarter, data-driven processes for greater efficiency and innovation.",
    image: "/assets/ai.png",
  },

  {
    index: 3,
    service: "Chatbot",
    description:
      " We develop innovative mobile apps for iOS and Android platforms.",
    detail:
      " TechEcho builds intelligent chatbots with advanced natural language understanding (NLU) and machine learning. Our chatbots support text and voice interactions, enabling businesses to automate customer service, improve user satisfaction, and provide real-time, 24/7 assistance while seamlessly integrating with existing systems.",
    image: "/assets/chatbot.png",
  },
];

export const Service = () => {
  let [activeCardIndex, setActiveCardIndex] = useState(1);

  const handleNext = () => {
    setTimeout(
      setActiveCardIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      ),
      1000
    );
  };

  const handlePrevious = () => {
    setTimeout(
      setActiveCardIndex(
        (prevIndex) => (prevIndex + 1 + data.length) % data.length
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
      <div className='flex justify-center mt-20 md:my-20'>
        <img src='/assets/service.png' alt='service' />
      </div>
      <div className='flex xl:flex-row flex-col px-10 md:px-32 my-20 md:my-40 items-center'>
        <div className='text-white basis-1/2'>
          <h1 className='text-2xl md:text-4xl font-extrabold my-4'>
            {selectedCard.service}
          </h1>
          <p className='md:text-xl'>{selectedCard.detail}</p>
          <button className='btn'>
            <span className='btn-text'>View More</span>
          </button>
        </div>
        <div className='w-full xl:w-3/4 relative flex items-center justify-center'>
          <button
            onClick={handlePrevious}
            className='absolute left-0 md:left-20 z-50'
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='text-white text-xl md:text-3xl border rounded-full px-4 p-2 bg-slate-500 hover:bg-slate-900'
            />
          </button>
          <div className='flex overflow-x-hidden'>
            {getDisplayedCard().map((card, index) => {
              return (
                <div
                  key={card.service}
                  className={`text-white p-3 rounded-lg bg-[#3F3D56] w-[10rem] h-[22rem] md:w-[25rem] md:h-[38rem] transition duration-1000 ease-in-out ${
                    index === 1
                      ? "absolute left-[22%] 2xl:left-[40%] md:left-[10%] xl:left-[30%] z-30"
                      : "opacity-40 scale-75"
                  } ${index === 0 ? "-rotate-12" : ""}  ${
                    index === 2 ? "rotate-12" : ""
                  }`}
                >
                  <h2 className='md:text-3xl text-xl font-bold my-4'>
                    {card.service}
                  </h2>
                  <p className='md:text-xl text-sm py-8'>{card.description}</p>
                  <figure>
                    <img
                      src={card.image}
                      alt='card'
                      className='object-contain h-1/2'
                    />
                  </figure>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleNext}
            className='absolute right-0 md:right-20 z-50'
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className='text-white text-xl md:text-3xl border rounded-full px-4 p-2 bg-slate-500 hover:bg-slate-900'
            />
          </button>
        </div>
      </div>
    </>
  );
};
