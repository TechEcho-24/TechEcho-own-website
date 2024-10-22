import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export const QueryCallForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    mobNumber: "",
    scheduleDate: "",
    scheduleTime: "",
    message: "",
    course: "",
  });
  const [minDate, setMinDate] = useState("");

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Set the minimum and maximum dates for the next 3 days
  useEffect(() => {
    const today = new Date();
    const nextThreeDays = new Date();
    nextThreeDays.setDate(today.getDate() + 3);

    setMinDate(formatDate(today));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <div className='h-screen pt-[5rem] md:pt-[10rem] w-10/12 md:w-2/3 mx-auto'>
        <h2 className='text-2xl text-white text-center'>Enter your details</h2>
        <form className='my-[2rem] md:my-[10rem] text-white'>
          <div className='flex justify-between my-4 md:flex-row gap-4 flex-col'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={userData.name}
              onChange={(e) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  name: e.target.value,
                }))
              }
              className='md:w-[48%] w-full p-4 text-xl rounded-lg bg-transparent text-white  placeholder:text-white border-2 border-neutral-700'
              required
            />

            <input
              type='tel'
              placeholder='Mobile no.'
              name='mobNumber'
              value={userData.mobNumber}
              onChange={(e) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  mobNumber: e.target.value,
                }))
              }
              className='md:w-[48%] w-full p-4 text-xl rounded-lg bg-transparent text-white placeholder:text-white border-2 border-neutral-700'
              required
            />
          </div>
          <div className='flex justify-between my-4 flex-col md:flex-row gap-4'>
            <input
              type='date'
              id='date'
              name='date'
              value={userData.scheduleDate}
              min={minDate}
              onChange={(e) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  scheduleDate: e.target.value,
                }))
              }
              className='text-white md:w-[48%] w-full p-4 text-xl rounded-lg text-darkblue bg-lightblue border-2 border-neutral-700 bg-transparent'
            />
            <select
              id='time'
              name='time'
              value={userData.scheduleTime}
              onChange={({ target }) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  scheduleTime: target.value,
                }))
              }
              className='md:w-[48%] w-full p-4 text-xl rounded-lg bg-transparent border-2 border-neutral-700'
              required
            >
              <option value='' className='text-black'>
                Select Time
              </option>
              <option value='09:00' className='text-black'>
                09:00 AM
              </option>
              <option value='12:00' className='text-black'>
                12:00 PM
              </option>
              <option value='15:00' className='text-black'>
                03:00 PM
              </option>
              <option value='18:00' className='text-black'>
                06:00 PM
              </option>
            </select>
          </div>
          <select
            onChange={({ target }) =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                course: target.value,
              }))
            }
            className=' bg-transparent w-full p-4 border border-neutral-700 rounded-md focus:outline-none focus:border-blue-600 mb-4'
          >
            <option
              value='select your course'
              className='bg-transparent text-black'
            >
              Select courses
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Full stack development
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Frontend development
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Backend development
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Ui/UX Design
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Digital Marketing
            </option>
          </select>
          <textarea
            placeholder='Leave a message'
            name='message'
            rows={5}
            className='w-full text-white text-xl p-4 placeholder:text-white border-2 border-neutral-700 bg-transparent'
            onChange={({ target }) =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                message: target.value,
              }))
            }
          ></textarea>
          <button
            onClick={handleSubmit}
            className='w-full p-4 text-white border-4 border-neutral-700 rounded-lg hover:border-blue-700 hover:bg-blue-700 my-4 '
          >
            Submit Now
          </button>
        </form>
      </div>
    </>
  );
};
