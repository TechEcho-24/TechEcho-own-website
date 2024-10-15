export const About = () => {
  return (
    <>
      <div className='flex justify-center my-20'>
        <img src='/assets/aboutHead.png' alt='' />
      </div>
      {/* team  */}
      <div className='flex md:flex-row flex-col md:mx-32 mx-10 my-4 md:my-10'>
        <div className='md:basis-1/2 flex md:relative'>
          <div className='bg-[#488edf] md:w-32 md:h-48  lg:h-72 hidden md:block'></div>
          <figure className='md:relative -left-16 top-11 md:w-3/4'>
            <img src='/assets/team.png' alt='team' className='w-full md:h-[50%] lg:h-full ' />
          </figure>
        </div>
        <div className='md:basis-1/2 text-white'>
          <p className='my-4 text-sm md:text-sm lg-text-xl'>
            Located in the thriving tech hub of Kanpur, TechEcho boasts a team
            of experts who bring diverse experiences from various technology
            sectors. Our team's collective expertise in fields like machine
            learning, web development, and cloud infrastructure allows us to
            tackle a broad range of challenges, from product ideation to
            full-scale digital deployment. We are committed to delivering not
            just products, but tailored experiences that propel your business
            forward.
          </p>
          <button className='btn'>
            <span className='btn-text'>View More Details</span>
          </button>
        </div>
      </div>
      {/* carrier  */}
      <div className='flex md:flex-row-reverse flex-col md:mx-32 mx-10 mt-20 items-center'>
        <div className='md:basis-1/2 flex'>
          <figure className='md:relative -right-20 top-11 md:w-3/4'>
            <img src='/assets/carrier.png' alt='team' className='md:w-full md:h-full object-cover' />
          </figure>
          <div className='bg-[#488edf] md:w-32 md:h-48  lg:h-72 hidden md:block'></div>
        </div>
        <div className='md:basis-1/2 text-white'>
          <div className='flex my-10'>
            <img src='/assets/carrierHead.png' alt='' />
          </div>
          <p className='my-4 text-sm md:text-sm lg-text-xl'>
            At TechEcho, our Career Section offers top-tier Full Stack
            Development and UX/UI Design courses, guided by industry experts in
            a collaborative and innovative environment. We ensure hands-on
            learning, access to the best teachers, and a supportive workspace.
            Upon completion, students receive a certification to validate their
            skills and kickstart their tech careers.
          </p>
          <button className='btn'>
            <span className='btn-text'>Get More Details</span>
          </button>
        </div>
      </div>
      {/* founder  */}
      <div className='flex md:flex-row flex-col md:mx-32 mx-10 py-5 items-center'>
        <div className='md:basis-1/2 flex md:relative'>
          <div className='bg-[#488edf] md:w-32 md:h-48  lg:h-72 hidden md:block'></div>
          <figure className='md:relative -left-16 top-11 md:w-3/4'>
            <img src='/assets/founder.png' alt='team' className='md:w-full md:h-full  object-fill' />
          </figure>
        </div>
        <div className='md:basis-1/2 text-white'>
          <div className='flex my-10'>
            <img src='/assets/founderHead.png' alt='' />
          </div>
          <p className='my-4 text-sm md:text-sm lg-text-xl'>
            At TechEcho, we are at the forefront of innovation, crafting
            cutting-edge technological solutions tailored to meet the needs of a
            dynamic and ever-evolving market. Based in Kanpur, Uttar Pradesh,
            our mission is to leverage advanced technology to simplify complex
            challenges, helping businesses scale and adapt in a competitive
            landscape. From software development to AI-driven solutions, we are
            dedicated to driving progress through tech.
          </p>
          <button className='btn'>
            <span className='btn-text'>Learn More</span>
          </button>
        </div>
      </div>
    </>
  );
};
