import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBrain, faCrosshairs, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let serviceData = [
  {
    title: "Web Development",
    img: "/assets/about/web-dev.png",
  },
  {
    title: "App Development",
    img: "/assets/about/app-dev.png",
  },
  {
    title: "UI/UX Design",
    img: "/assets/about/web-dev.png",
  },
  {
    title: "Digital Marketing",
    img: "/assets/about/app-dev.png",
  },
  {
    title: "E-commerce Solutions",
    img: "/assets/about/web-dev.png",
  },
  {
    title: "SEO Services",
    img: "/assets/about/app-dev.png",
  },
];

function About() {
  return (
    <>
      {/* intro  */}
      <div className='flex flex-col md:flex-row px-10 pt-32 md:items-center md:px-20'>
        <div className='basis-1/2'>
          <img
            src='/assets/team.png'
            alt='team'
            className='relative w-8/12 rounded-lg'
          />
          <img
            src='/assets/founder.png'
            alt='founder'
            className='relative w-8/12 -top-20 left-20 rounded-lg border-4 border-white'
          />
        </div>
        <div className='basis-1/2 text-white'>
          <p className='text-white my-2 md:text-xl'>About Us</p>
          <h2 className='text-2xl my-2 text-blue-500 font-bold md:text-5xl md:my-4'>
            Our Journey of Innovation and Expertise
          </h2>
          <p className='md:text-xl md:leading-10'>
            Since our inception, we've been at the forefront of delivering
            cutting-edge solutions that shape the digital landscape. With [X
            years] of experience in [mention industry or field, e.g., software
            development, AI, cloud computing, etc.], we have honed our expertise
            in creating scalable, efficient, and innovative technologies that
            meet the needs of an ever-evolving market. Our team of dedicated
            professionals brings together deep knowledge and a passion for
            technology, collaborating across disciplines to tackle complex
            challenges. From [highlight specific areas of experience, e.g.,
            building enterprise-level applications, developing AI-powered
            platforms, revolutionizing cloud-based infrastructures], our track
            record of success speaks to our commitment to excellence
          </p>
        </div>
      </div>
      {/* talent  */}
      <div className='px-10 my-20 md:my-36 grid grid-flow-row md:grid-flow-col gap-14 justify-center text-white'>
        <div className='text-center shadow-lg shadow-blue-500 p-2'>
          <FontAwesomeIcon
            icon={faLightbulb}
            className='text-blue-400 text-5xl'
          />
          <h4 className='text-2xl mb-6 mt-2'>Innovation </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi
            repellendus consequatur
          </p>
        </div>
        <div className='text-center shadow-lg shadow-blue-500 p-2'>
          <FontAwesomeIcon
            icon={faCrosshairs}
            className='text-blue-400 text-5xl'
          />
          <h4 className='text-2xl mb-6 mt-2'>Client centric </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi
            repellendus consequatur
          </p>
        </div>
        <div className='text-center shadow-lg shadow-blue-500 p-2'>
          <FontAwesomeIcon icon={faBrain} className='text-blue-400 text-5xl' />
          <h4 className='text-2xl mb-6 mt-2'>Creativity </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi
            repellendus consequatur
          </p>
        </div>
      </div>

      {/*Expertise  */}
      <div className='text-white my-32'>
        <h2 className='text-center text-4xl text-blue-500 md:text-5xl md:font-bold'>
          Our Expertise
        </h2>
        <p className='w-11/12 md:w-1/2 md:text-xl my-6 text-center mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in
          maxime amet, neque nesciunt velit, deserunt quas minus aperiam debitis
          explicabo.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 justify-center gap-2'>
          {serviceData.map((data, index) => {
            return (
              <div key={index} className='text-center animated-shadow-box'>
                <img src={data.img} alt='service' className='w-1/2 mx-auto' />
                <p className='text-2xl'>{data.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* connect  */}
      <div className='flex flex-col text-white bg-blue-500 py-6 md:flex-row md:justify-between px-10 md:px-20'>
        <div className='text-2xl'>
          <h2>Stay connected with us on </h2>
          <h2 className='mt-2'> Social Media</h2>
        </div>
        <div className='text-white my-4'>
          <FontAwesomeIcon
            icon={faX}
            className='border-2 border-white rounded-full p-2 mr-4 hover:bg-white hover:text-blue-700 text-2xl'
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className='border-2 border-white rounded-full p-2 mr-4 hover:bg-white hover:text-blue-700 text-2xl'
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className='border-2 border-white rounded-full p-2 mr-4 hover:bg-white hover:text-blue-700 text-2xl'
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className='border-2 border-white rounded-full p-2 mr-4 hover:bg-white hover:text-blue-700 text-2xl'
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className='border-2 border-white rounded-full p-2 mr-4 hover:bg-white hover:text-blue-700 text-2xl'
          />
        </div>
      </div>
    </>
  );
}

export default About;
