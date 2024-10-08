import React from "react";
import { ContactForm } from "../components/home/ContactForm";

function Contact() {
  return (
    <>
      <div className='pt-12'>
        <ContactForm />
      </div>

      <div className='flex md:flex-row flex-col items-center justify-between pt-40 px-10 md:px-32'>
        <div class='text-white mb-6 basis-1/2'>
          <h2 class='text-4xl font-bold text-blue-500 md:text-7xl md:mb-32 mb-8'>
            Contact Details
          </h2>
          <p class='mb-2 md:mb-4 md:text-2xl font-bold'>
            <strong className='mr-2 text-xl md:text-3xl'>Email:</strong>{" "}
            techecho.kanpur@gmail.com
          </p>
          <p class='mb-2 md:mb-4 md:text-2xl font-bold'>
            <strong className='mr-2 text-xl md:text-3xl'>Phone:</strong>{" "}
            +91-8318999388
          </p>
          <p class='mb-4 md:mb-4 md:text-2xl font-bold'>
            <strong className='mr-2 text-xl md:text-3xl'>Address:</strong>Phase
            3rd, Lig 41, Tatya Tope Nagar, Kanpur, Uttar Pradesh 208022
          </p>
          <a
            href='mailto:techecho.kanpur@gmail.com'
            className='block mt-4 text-blue-500 underline font-bold'
          >
            Send an Email
          </a>
        </div>
        <div className='md:basis-1/3'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.7075395263487!2d80.28335129999998!3d26.432912900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c492af7049c09%3A0xc55382ba5e3faa5b!2sTechEcho!5e0!3m2!1sen!2sin!4v1728320254251!5m2!1sen!2sin'
            width='600'
            height='450'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            className='rounded-lg md:w-full w-10/12 mx-auto h-52 md:h-96'
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
