import React, { useState, useEffect } from "react";

export const QueryCallForm = () => {
  const [name, setName] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
    setMaxDate(formatDate(nextThreeDays));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected Date: ${selectedDate}`);
    console.log(`Selected Time: ${selectedTime}`);
  };

  return (
    <>
      <div className='h-screen pt-[10rem]'>
        <h2 className='text-white text-3xl text-center'>Enter your details</h2>
        <form className='flex flex-col justify-center items-center gap-5 mt-10 border-4 border-neutral-700 w-1/2 mx-auto p-6'>
          <input
            type='text'
            placeholder='Full name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-2 text-white bg-gray-800 rounded-lg'
            required
          />
          <input
            type='number'
            placeholder='Mobile no.'
            name='mobNumber'
            value={mobNumber}
            onChange={(e) => setMobNumber(e.target.value)}
            className='w-full p-2 text-white bg-gray-800 rounded-lg'
            required
          />
          <input
            type='date'
            id='date'
            name='date'
            value={selectedDate}
            min={minDate}
            max={maxDate}
            onChange={({ target }) => setSelectedDate(target.value)}
            className='w-full p-2 text-white bg-gray-800 rounded-lg'
            required
          />
          <select
            id='time'
            name='time'
            value={selectedTime}
            onChange={({ target }) => setSelectedTime(target.value)}
            className='w-full p-2 text-white bg-gray-800 rounded-lg'
            required
          >
            <option value=''>Select Time</option>
            <option value='09:00'>09:00 AM</option>
            <option value='12:00'>12:00 PM</option>
            <option value='15:00'>03:00 PM</option>
            <option value='18:00'>06:00 PM</option>
          </select>
          <input
            type='text'
            placeholder='Subject'
            className='w-full p-2 text-white bg-gray-800 rounded-lg'
          />
          <button
            onClick={handleSubmit}
            className='w-full p-4 text-white bg-gray-900 rounded-lg hover:bg-blue-500'
          >
            Submit Now
          </button>
        </form>
      </div>
    </>
  );
};
