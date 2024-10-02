import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  let [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className='w-4/5 h-full mx-auto '>
      <div className='flex items-center justify-center my-9 backdrop-blur-lg bg-black'>
        {/* Signup Form Section */}
        <div className='flex flex-col justify-center items-center md:w-1/2 p-8'>
          <figure>
            <img src='/assets/welcome.png' alt='welcome' />
          </figure>
          <h2 className='text-3xl font-bold text-blue-500 mb-6'>Sign Up</h2>
          <form className='w-full max-w-sm'>
            <div className='mb-4'>
              <label
                className='block text-gray-300 text-sm font-bold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Your name'
                value={data.username}
                onChange={(e) => setData({ username: e.target.value })}
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-300 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Your email'
                value={data.email}
                onChange={(e) => setData({ email: e.target.value })}
              />
            </div>

            <div className='mb-6'>
              <label
                className='block text-gray-300 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='Your password'
                value={data.password}
                onChange={(e) => setData({ password: e.target.value })}
              />
            </div>

            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
              >
                Sign Up
              </button>
            </div>
            <div className='text-center'>
              <span className='relative text-white text-sm top-8 bg-black px-2'>
                Or continue with
              </span>
              <hr className='my-5 border-blue-400' />
            </div>
            <button className='p-2 rounded-lg  border-4 border-blue-500 w-full justify-center text-white flex items-center hover:bg-gray-500'>
              <img src='/assets/google.png' alt='google' className='h-8 mr-4' />
              Sign Up with google
            </button>
          </form>
          <p className='text-white mt-10'>
            Already have a account?
            <Link to={"/login"} className='text-blue-300 ml-4 underline'>
              Login here
            </Link>
          </p>
        </div>
        {/* Image Section */}
        <div className='hidden md:flex md:w-1/2 bg-gray-800'>
          <img
            src='/assets/signup.jpeg'
            alt='Signup Aside'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};
