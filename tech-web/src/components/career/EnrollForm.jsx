import React, { useState } from "react";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    qualification: "",
    course: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        className='text-white w-11/12 md:w-1/2 bg-transparent '
        onSubmit={handleSubmit}
      >
        <h2 className='text-2xl font-bold mb-6 text-center'>Enroll Now</h2>

        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-white text-sm font-bold mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
            className='placeholder:text-white text-white bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-white text-sm font-bold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='placeholder:text-white text-white bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='phone'
            className='block text-white text-sm font-bold mb-2'
          >
            Phone number
          </label>
          <input
            type='tel'
            placeholder='Enter your phone Number'
            id='phone'
            name='phone'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className='placeholder:text-white text-white bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='address'
            className='block text-white text-sm font-bold mb-2'
          >
            Enter your address
          </label>
          <input
            type='text'
            placeholder='Building no,  area, locality, district- pincode'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
            className='placeholder:text-white text-white bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-bold mb-2'>
            Select your Qualifications
          </label>
          <select
            onChange={handleChange}
            className='bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          >
            <option
              value='select your qualification'
              className='bg-transparent text-neutral-400'
            >
              Select your qualification
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              High School
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Intermediate
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Graduated
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              other
            </option>
          </select>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='course'
            className='block text-white text-sm font-bold mb-2'
          >
            Select Courses
          </label>
          <select
            onChange={handleChange}
            className=' bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
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
              Web Development
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
        </div>

        <button
          type='submit'
          className=' text-white w-full font-bold py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-700 transition duration-300'
        >
          Enroll
        </button>
      </form>
    </div>
  );
};

export default EnrollForm;
