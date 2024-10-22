import { useState } from "react";
import { Link } from "react-router-dom";
import { QueryCallForm } from "./QueryCallForm";
let data = [
  {
    title: "Frontend Development",
    description:
      "Unlock your potential with our Frontend Development Course, designed to help you master the art of building responsive, interactive websites. Guided by industry experts, you'll dive into HTML, CSS, JavaScript, and modern frameworks like React.",
    image: "/assets/career/stack.png",
    price: "12,499",
    discPrice: "9,999",
  },
  {
    title: "Backend Development",
    description:
      "Master the essentials of Backend Development with our comprehensive course, led by industry experts. Learn to build robust, scalable server-side applications using technologies like Node.js, Express, databases, and APIs. Through hands-on projects and real-world scenarios.",
    image: "/assets/career/stack.png",
    price: "12,499",
    discPrice: "9,999",
  },
  {
    title: "Fullstack Development",
    description:
      "Become a versatile developer with our Fullstack Development Course, expertly designed to teach both frontend and backend technologies. Guided by industry professionals, you'll learn to build complete web applications from scratch, Through hands-on projects and real-world experience.",
    image: "/assets/career/stack.png",
    price: "20,499",
    discPrice: "15,999",
  },
];

export const Development = () => {
  return (
    <>
      <div className='pt-[4rem] md:pt-[10rem] flex flex-col justify-center items-center mb-[10rem] gap-10 md:gap-32'>
        <div className='md:w-2/3 text-center'>
          <h2 className='text-3xl md:text-6xl font-bold capitalize text-white '>
            Explore our <span className='text-blue-500'>web</span>
          </h2>
          <h2 className='text-3xl md:text-6xl font-bold capitalize text-white mt-4'>
            <span className='text-blue-500'>Development </span> Courses
          </h2>
        </div>
        {data.map((content, index) => {
          return (
            <>
              <div
                key={index}
                className='flex items-center justify-between flex-col-reverse md:flex-row text-white w-10/12 rounded-lg p-6 md:p-16 border-4 border-neutral-600 relative'
              >
                <div className='basis-1/2'>
                  <h2 className='text-blue-500 text-2xl md:text-4xl font-medium my-4'>
                    {content.title}
                  </h2>
                  <p className='md:text-lg leading-relaxed'>
                    {content.description}
                  </p>
                  <p className='text-2xl mt-6 text-yellow-500'>
                    ₹{content.discPrice}
                    <span className='text-neutral-400 ml-4 text-xl mix line-through'>
                      {content.price}
                    </span>
                  </p>
                  <div className='md:absolute -bottom-14'>
                    <Link className='btn bg-black' to={"/enroll"}>
                      <span className='btn-text'>Get enrolled</span>
                    </Link>
                  </div>
                </div>
                <figure className='basis-1/3'>
                  <img
                    src={content.image}
                    alt={content.title}
                    className='w-full rounded-xl'
                  />
                </figure>
              </div>
            </>
          );
        })}
        <div className='bg-blue-500 text-white w-10/12 flex flex-col md:flex-row items-center px-6 py-10 justify-between rounded-xl'>
          <div className='text-3xl'>
            <p>Not sure about the course structure?</p>
            <p>Schedule a call</p>
          </div>
          <div className='mt-6 md:m-0'>
            <Link
              to={"/schedule"}
              className='bg-black p-4 rounded-xl hover:bg-blue-700 w-full'
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};