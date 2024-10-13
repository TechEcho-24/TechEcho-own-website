import React, { useState, useRef } from "react";
import gsap from "gsap";

export const Offering = () => {
  //   let [activeBox, setActiveBox] = useState(null);
  const containerRefs = useRef([]); // To store refs for each container
  const imageRefs = useRef([]); // To store refs for each image
  const [visibleImages, setVisibleImages] = useState({});
  const [hideService, setHideService] = useState(null);

  let data = [
    {
      index: 0,
      service: "Web Development",
      description:
        " We develop innovative mobile apps for iOS and Android platforms.",
      detail:
        " TechEcho creates dynamic, responsive websites using modern frameworks like React.js and Node.js. Our web development services focus on building scalable, secure platforms, including PWAs and e-commerce solutions, optimized for speed, SEO, and seamless user experiences across all devices.",
      image: "/assets/service/web.png",
    },
    {
      index: 1,
      service: "App Development",
      description:
        " We develop innovative mobile apps for iOS and Android platforms.",
      detail:
        " TechEcho specializes in building high-performance mobile and desktop apps that deliver seamless user experiences across Android and iOS. We develop scalable, secure applications tailored to your business needs, offering end-to-end solutions from design to deployment, ensuring exceptional functionality and user engagement.",
      image: "/assets/service/app.png",
    },
    {
      index: 2,
      service: "AI Development",
      description:
        " We develop innovative mobile apps for iOS and Android platforms.",
      detail:
        " TechEcho provides advanced AI solutions, including machine learning, NLP, and predictive analytics. We help businesses automate tasks, optimize operations, and enhance decision-making with AI-powered systems. Our AI integration transforms workflows, enabling smarter, data-driven processes for greater efficiency and innovation.",
      image: "/assets/service/ai.png",
    },

    {
      index: 3,
      service: "ChatBot Development",
      description:
        " We develop innovative mobile apps for iOS and Android platforms.",
      detail:
        " TechEcho builds intelligent chatbots with advanced natural language understanding (NLU) and machine learning. Our chatbots support text and voice interactions, enabling businesses to automate customer service, improve user satisfaction, and provide real-time, 24/7 assistance while seamlessly integrating with existing systems.",
      image: "/assets/service/chatbot.png",
    },
    {
      index: 4,
      service: "UI/UX Design",
      description:
        " We develop innovative mobile apps for iOS and Android platforms.",
      detail:
        " TechEcho builds intelligent chatbots with advanced natural language understanding (NLU) and machine learning. Our chatbots support text and voice interactions, enabling businesses to automate customer service, improve user satisfaction, and provide real-time, 24/7 assistance while seamlessly integrating with existing systems.",
      image: "/assets/service/design.png",
    },
    {
      index: 5,
      service: "Brand Marketing",
      description:
        " We develop innovative mobile apps for iOS and Android platforms.",
      detail:
        " TechEcho builds intelligent chatbots with advanced natural language understanding (NLU) and machine learning. Our chatbots support text and voice interactions, enabling businesses to automate customer service, improve user satisfaction, and provide real-time, 24/7 assistance while seamlessly integrating with existing systems.",
      image: "/assets/service/marketing.png",
    },
  ];

  const handleMouseMove = (e, index) => {
    const container = containerRefs.current[index];
    const image = imageRefs.current[index];

    // Get the bounding box of the container
    const containerRect = container.getBoundingClientRect();

    // Calculate the image size
    const imageSize = 40;

    // Calculate mouse position relative to the container
    let x = e.clientX - containerRect.left - imageSize / 2;
    let y = e.clientY - containerRect.top - imageSize / 2;

    // Constrain the x and y values within the bounds of the container
    const maxX = containerRect.width - imageSize;
    const maxY = containerRect.height - imageSize;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    // Move the image using GSAP
    gsap.to(image, {
      x,
      y,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <>
      <div className='flex flex-col md:flex-row text-white md:items-center mt-10 justify-between'>
        <div className='md:basis-2/5 text-3xl md:text-5xl font-bold leading-relaxed capitalize'>
          <h2>
            what <span className='text-blue-500'>Services</span>
          </h2>
          <h2>We're offering</h2>
        </div>
        <p className='basis-2/3 mt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          eligendi nisi dicta, odit sunt, ipsum recusandae voluptatem
          voluptatibus soluta similique omnis id quidem quod quasi quam
          exercitationem sed facere ipsa nihil vero non? Numquam est ab nam
          quisquam quae sunt.
        </p>
      </div>
      <ul className='text-gray-400 mt-20 md:mt-32'>
        {data.map((info, index) => {
          return (
            <li
              key={index}
              ref={(el) => (containerRefs.current[index] = el)}
              className='py-6 hover:text-white relative hover:p-4'
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() =>
                setVisibleImages((prev) => ({ ...prev, [index]: true }))
              }
              onMouseLeave={() =>
                setVisibleImages((prev) => ({ ...prev, [index]: false }))
              }
              onClick={() =>
                setHideService((prev) => (prev === index ? null : index))
              }
            >
              <div
                className={`flex justify-between items-center relative ${
                  hideService === index ? " flex-col" : ""
                }`}
              >
                <h3 className='md:text-3xl text-xl font-bold md:basis-1/4 hover:text-blue-500'>
                  {info.service}
                </h3>
                <p
                  className={`w-full mt-3 md:w-2/5 text-sm md:text-xl ${
                    hideService === index ? "" : "hidden md:block"
                  }`}
                >
                  {info.description}
                </p>
                <img
                  src='/assets/service/arrow.png'
                  alt=''
                  className={`object-contain w-8 md:w-14 mr-6 ${
                    hideService === index ? "hidden md:block" : ""
                  }`}
                />
              </div>

              <div
                ref={(el) => (imageRefs.current[index] = el)}
                className={`md:absolute top-0 w-10 h-10 rounded-full transition-opacity duration-300 hidden md:block ${
                  visibleImages[index] ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={info.image}
                  alt='star'
                  className={`max-w-96 object-contain`}
                />
              </div>
              <hr className='mt-6' />
            </li>
          );
        })}
      </ul>
    </>
  );
};
