export const Intro = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:py-32 py-6 items-center justify-between md:px-32 px-10">
        <div className="text-white basis-1/2">
          <h2 className="md:text-4xl text-2xl font-extrabold my-6">
            What We Offer
          </h2>
          <p className="md:text-xl lg:text-xl  text-md md:leading-8">
            At TechEcho, we are at the forefront of innovation, crafting
            cutting-edge technological solutions tailored to meet the needs of a
            dynamic and ever-evolving market. Based in Kanpur, Uttar Pradesh,
            our mission is to leverage advanced technology to simplify complex
            challenges, helping businesses scale and adapt in a competitive
            landscape. From software development to AI-driven solutions, we are
            dedicated to driving progress through tech.
          </p>
          <button className="md:py-3 md:px-6 p-4 text-white border-4 border-[#488edf] my-14 md:text-xl font-semibold rounded-lg hover:bg-[#488edf]">
            Connect With Us
          </button>
        </div>
        <div className="basis-5/12">
          <img src="/assets/intro.svg" alt="" />
        </div>
      </div>
    </>
  );
};
