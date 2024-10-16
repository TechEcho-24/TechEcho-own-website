import { Link } from "react-router-dom";

let data = [
  {
    title: "Web Development",
    description:
      "loremejksdnjkdskkdf dfjfiodsfklsd foidsjfklsd m,j opsdmflkds m, kjfiod mds iosdjfklds m,ldiodm,lsdkldkf, vervmiodf m,fdnuiwer,mdfs jkefnui",
    image: "/assets/career/stack.png",
    path: "/career/web-dev",
  },
  {
    title: "App Development",
    description:
      "loremejksdnjkdskkdf dfjfiodsfklsd foidsjfklsd m,j opsdmflkds m, kjfiod mds iosdjfklds m,ldiodm,lsdkldkf, vervmiodf m,fdnuiwer,mdfs jkefnui",
    image: "/assets/career/mobile-app.jpg",
    path: "/career/app-dev",
  },
  {
    title: "UI/UX Designing",
    description:
      "loremejksdnjkdskkdf dfjfiodsfklsd foidsjfklsd m,j opsdmflkds m, kjfiod mds iosdjfklds m,ldiodm,lsdkldkf, vervmiodf m,fdnuiwer,mdfs jkefnui",
    image: "/assets/career/design.png",
    path: "/career/design",
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
              <div className='flex items-center justify-between flex-col-reverse md:flex-row text-white w-10/12 rounded-lg p-16 border-4 border-neutral-600 relative'>
                <div className='basis-1/2'>
                  <h2 className='text-blue-500 text-3xl md:text-5xl my-4'>
                    {content.title}
                  </h2>
                  <p className='md:text-xl leading-relaxed'>
                    {content.description}
                  </p>
                  <div className='flex justify-center flex-col md:flex-row md:gap-10 md:mt-6 md:absolute -bottom-14'>
                    <Link className='btn bg-black' to={content.path}>
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
