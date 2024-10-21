import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export const QueryCallForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    mobNumber: "",
    scheduleDate: "",
    scheduleTime: "",
    message: "",
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
      <div className='h-screen pt-[10rem] w-2/3 mx-auto'>
        <h2 className='text-2xl text-white text-center'>Enter your details</h2>
        <form className='my-[10rem] '>
          <div className='flex justify-between my-4'>
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
              className='w-[48%] p-4 text-xl rounded-lg  placeholder:text-black'
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
              className='w-[48%] p-4 text-xl rounded-lg placeholder:text-black'
              required
            />
          </div>
          <div className='flex justify-between my-4'>
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
              className='w-[48%] p-4 text-xl rounded-lg text-black'
              required
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
              className='w-[48%] p-4 text-xl rounded-lg text-black'
              required
            >
              <option value=''>Select Time</option>
              <option value='09:00'>09:00 AM</option>
              <option value='12:00'>12:00 PM</option>
              <option value='15:00'>03:00 PM</option>
              <option value='18:00'>06:00 PM</option>
            </select>
          </div>
          <textarea
            placeholder='Leave a message'
            name='message'
            rows={5}
            className='w-full text-black text-xl p-4 placeholder:text-black'
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
