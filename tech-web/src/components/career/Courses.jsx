import { Link } from "react-router-dom";

let data = [
  {
    title: "Web Development",
    description:
      "TechEcho’s Web Development course equips you with the skills to create dynamic, professional websites. Learn to design, build, and optimize sites for seamless user experiences, preparing you for a successful career in tech.",
    image: "/assets/career/mern.png",
    path: "/career/web-dev",
  },
  {
    title: "UI/UX Designing",
    description:
      "Elevate your creativity with TechEcho’s UI/UX Design course, where you’ll master the art of crafting user-friendly interfaces and intuitive designs. This course empowers you to create engaging digital experiences and excel in the design industry.",
    image: "/assets/career/UI-UX.png",
    path: "/career/design",
  },
  {
    title: "Digital Marketing",
    description:
      "TechEcho’s Digital Marketing course provides the expertise needed to thrive in the online marketing world. Learn to craft impactful strategies, grow brand presence, and drive results, ensuring a successful career in the digital landscape.",
    image: "/assets/career/marketing.png",
    path: "/career/marketing",
  },
];

export const Courses = () => {
  return (
    <>
      <div className='pt-[10rem] flex flex-col justify-center items-center mb-[10rem] gap-20'>
        <h1 className='text-blue-500 text-4xl md:text-6xl font-bold'>
          Choose your field
        </h1>
        {data.map((content, index) => {
          return (
            <>
              <div className='flex items-center justify-between flex-col-reverse md:flex-row text-white w-10/12 rounded-lg p-8 md:p-16 border-4 border-neutral-600 relative'>
                <div className='basis-1/2'>
                  <h2 className='text-blue-500 text-3xl md:text-5xl my-4'>
                    {content.title}
                  </h2>
                  <p className='md:text-xl leading-relaxed'>
                    {content.description}
                  </p>
                  <div className='flex justify-center flex-col md:flex-row md:gap-10 md:mt-6 md:absolute -bottom-14'>
                    <Link
                      className='btn bg-black text-center'
                      to={content.path}
                    >
                      <span className='btn-text'>Get Info</span>
                    </Link>
                  </div>
                </div>
                <figure className='basis-1/3'>
                  <img
                    src={content.image}
                    alt={content.title}
                    className='w-full rounded-xl'
                  />
                </figure>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
