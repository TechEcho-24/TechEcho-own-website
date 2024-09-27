export const Contact = () => {
  return (
    <>
      <div className='flex justify-center my-20'>
        <img src='/assets/contact.png' alt='#contact' />
      </div>
      <form action='#' className='md:w-2/5 mx-auto w-4/5'>
        <div className='flex md:flex-row flex-col justify-between items-center'>
          <input
            type='text'
            placeholder='First name'
            className='w-full p-4 rounded-lg md:mr-4 my-2'
          />
          <input
            type='text'
            placeholder='Last name'
            className='w-full p-4 rounded-lg md:ml-4 my-2'
          />
        </div>
        <div className='flex md:flex-row flex-col justify-between items-center mt-2'>
          <input
            type='text'
            placeholder='Email'
            className='w-full p-4 rounded-lg md:mr-4 md:mb-0 mb-4'
          />
          <input
            type='text'
            placeholder='Mobile no.'
            className='w-full p-4 rounded-lg md:ml-4'
          />
        </div>
        <div className='my-4'>
          <input
            type='text'
            placeholder='Email Subject'
            className='w-full rounded-lg p-4'
          />
        </div>
        <div className='my-4'>
          <textarea
            name='textarea'
            className='w-full rounded-lg text-2xl p-4'
            rows={5}
            cols={50}
            placeholder='Your Message'
          ></textarea>
        </div>
        <input
          type='submit'
          className='border-4 border-[#488edf] w-full text-white p-4 rounded-lg text-2xl hover:bg-[#488edf]'
        />
      </form>
    </>
  );
};
