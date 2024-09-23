import React from "react";

export const About = () => {
  return (
    <>
      <div className='flex justify-center my-20'>
        <img src='/assets/aboutHead.png' alt='' />
      </div>
      {/* team  */}
      <div className='flex md:flex-row flex-col md:mx-32 mx-10 py-10'>
        <div className='md:basis-1/2 flex md:relative'>
          <div className='bg-[#488edf] w-40 h-96 hidden md:block'></div>
          <figure className='md:absolute left-10 top-8 md:w-3/4'>
            <img src='/assets/team.png' alt='team' className='w-full' />
          </figure>
        </div>
        <div className='md:basis-1/2 text-white'>
          <p className='my-4 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            doloremque quam reprehenderit, sapiente mollitia accusamus
            exercitationem dolore eum impedit repellat tenetur alias debitis
            eaque labore culpa recusandae fugit molestiae totam quidem laborum
            enim, illum magnam, nihil nemo. Quia eos soluta nihil labore fugiat
            harum illo autem iusto vitae libero, sit quibusdam maiores cum.
            Obcaecati non explicabo impedit tempora et magni enim voluptatem
            beatae doloremque sunt laborum, quis blanditiis veritatis in quos
            totam temporibus.
          </p>
          <button className='text-2xl p-4 rounded-lg border-4 border-[#488edf] my-16 hover:bg-[#488edf]'>
            View More Details
          </button>
        </div>
      </div>
      {/* carrier  */}
      <div className='flex md:flex-row-reverse flex-col md:mx-32 mx-10 mt-20 items-center'>
        <div className='md:basis-1/2 flex'>
          <figure className='md:relative -right-28 top-10 md:w-3/4'>
            <img src='/assets/carrier.png' alt='team' className='w-full' />
          </figure>
          <div className='bg-[#488edf] w-40 h-96 hidden md:block'></div>
        </div>
        <div className='md:basis-1/2 text-white'>
          <div className='flex my-10'>
            <img src='/assets/carrierHead.png' alt='' />
          </div>
          <p className='my-4 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            doloremque quam reprehenderit, sapiente mollitia accusamus
            exercitationem dolore eum impedit repellat tenetur alias debitis
            eaque labore culpa recusandae fugit molestiae totam quidem laborum
            enim, illum magnam, nihil nemo. Quia eos soluta nihil labore fugiat
            harum illo autem iusto vitae libero, sit quibusdam maiores cum.
            Obcaecati non explicabo impedit tempora et magni enim voluptatem
            beatae doloremque sunt laborum, quis blanditiis veritatis in quos
            totam temporibus.
          </p>
          <button className='text-2xl p-4 rounded-lg border-4 border-[#488edf] my-16 hover:bg-[#488edf]'>
            Get More Details
          </button>
        </div>
      </div>
      {/* founder  */}
      <div className='flex md:flex-row flex-col md:mx-32 mx-10 py-5 items-center'>
        <div className='md:basis-1/2 flex md:relative'>
          <div className='bg-[#488edf] w-40 h-96 hidden md:block'></div>
          <figure className='md:absolute left-10 top-8 md:w-3/4'>
            <img src='/assets/founder.png' alt='team' className='w-full' />
          </figure>
        </div>
        <div className='md:basis-1/2 text-white'>
          <div className='flex my-10'>
            <img src='/assets/founderHead.png' alt='' />
          </div>
          <p className='my-4 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            doloremque quam reprehenderit, sapiente mollitia accusamus
            exercitationem dolore eum impedit repellat tenetur alias debitis
            eaque labore culpa recusandae fugit molestiae totam quidem laborum
            enim, illum magnam, nihil nemo. Quia eos soluta nihil labore fugiat
            harum illo autem iusto vitae libero, sit quibusdam maiores cum.
            Obcaecati non explicabo impedit tempora et magni enim voluptatem
            beatae doloremque sunt laborum, quis blanditiis veritatis in quos
            totam temporibus.
          </p>
          <button className='text-2xl p-4 rounded-lg border-4 border-[#488edf] my-16 hover:bg-[#488edf]'>
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};
