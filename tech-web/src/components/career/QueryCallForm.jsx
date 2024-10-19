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
      <div>
        <h2 className='text-2xl text-center'>Enter your details</h2>
        <form className='text-black grid grid-cols-2 gap-5 mx-auto my-4'>
          <input
            type='text'
            placeholder='Full name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-2 bg-white rounded-lg'
            required
          />
          <input
            type='tel'
            placeholder='Mobile no.'
            name='mobNumber'
            value={mobNumber}
            onChange={(e) => setMobNumber(e.target.value)}
            className='w-full p-2 bg-white rounded-lg'
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
            className='w-full p-2 bg-white rounded-lg text-black'
            required
          />
          <select
            id='time'
            name='time'
            value={selectedTime}
            onChange={({ target }) => setSelectedTime(target.value)}
            className='w-full p-2 bg-white rounded-lg text-black'
            required
          >
            <option value=''>Select Time</option>
            <option value='09:00'>09:00 AM</option>
            <option value='12:00'>12:00 PM</option>
            <option value='15:00'>03:00 PM</option>
            <option value='18:00'>06:00 PM</option>
          </select>
        </form>
        <button
          onClick={handleSubmit}
          className='w-full p-4 bg-black rounded-lg hover:bg-blue-700 my-2'
        >
          Submit Now
        </button>
      </div>
    </>
  );
};
