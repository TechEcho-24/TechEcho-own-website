let data = [
  {
    title: "Frontend Development",
    description:
      "loremejksdnjkdskkdf dfjfiodsfklsd foidsjfklsd m,j opsdmflkds m, kjfiod mds iosdjfklds m,ldiodm,lsdkldkf, vervmiodf m,fdnuiwer,mdfs jkefnui",
    image: "/assets/career/stack.png",
    price: "12,000",
  },
  {
    title: "Backend Development",
    description:
      "loremejksdnjkdskkdf dfjfiodsfklsd foidsjfklsd m,j opsdmflkds m, kjfiod mds iosdjfklds m,ldiodm,lsdkldkf, vervmiodf m,fdnuiwer,mdfs jkefnui",
    image: "/assets/career/stack.png",
    price: "12,000",
  },
  {
    title: "Fullstack Development",
    description:
      "loremejksdnjkdskkdf dfjfiodsfklsd foidsjfklsd m,j opsdmflkds m, kjfiod mds iosdjfklds m,ldiodm,lsdkldkf, vervmiodf m,fdnuiwer,mdfs jkefnui",
    image: "/assets/career/stack.png",
    price: "20,000",
  },
];

export const Development = () => {
  return (
    <>
      <div className='pt-[10rem] flex flex-col justify-center items-center mb-[10rem] gap-32'>
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
                  <p className='text-3xl mt-6'>
                    Price :{" "}
                    <span className='text-yellow-500'>{content.price}/_</span>
                  </p>
                  <div className='flex justify-center flex-col md:flex-row md:gap-10 md:mt-6 md:absolute -bottom-14'>
                    <button className='btn bg-black'>
                      <span className='btn-text'>Get enrolled</span>
                    </button>
                    <button className='btn bg-black'>
                      <span className='btn-text'>Schedule a call</span>
                    </button>
                  </div>
                </div>
                <figure className='basis-1/3'>
                  <img
                    src={content.image}
                    alt={content.title}
                    className='w-full rounded-xl'
                  />
                </figure>
                {index === 2 ? (
                  <div className='absolute -left-44 -top-28'>
                    <img
                      src='/assets/star.png'
                      alt='offer'
                      className='w-[60%] float-left'
                    />
                    <p className='text-3xl absolute bottom-[40%] left-[20%] text-black font-bold'>
                      10% off
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
