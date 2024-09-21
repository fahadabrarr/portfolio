const ProjectComImg = () => {
  return (
    <div className="flex flex-col items-center justify-between mx-auto py-3">
      <div className="flex flex-col items-center justify-center">
        <img
          src="service.svg"
          alt=""
          className=" rounded-xl w-[350px] h-[350px] mx-auto mix-blend-lighten"
        />
        <div className="border-[3px] border-text_highlight w-full"></div>
        <h1 className="text-text_highlight font-thin px-5 pb-5 text-2xl mt-2">
          {` ----- MY  PROJECT -----`}
        </h1>
      </div>

      <p className="max-w-[750px] text-center p-3 cursor-none text-white/60 border rounded-lg border-accent-hover hover:text-zinc-50 hover:font-thin hover:bg-zinc-950 duration-500 ">
        My portfolio features a range of backend development and data science
        projects that demonstrate my expertise in building robust and scalable
        systems. These projects include an eCommerce backend, a job portal
        backend, and an education platform backend, all built with a focus on
        security, performance, and user experience. Additionally, I've developed
        a price prediction model and a recommendation system using Scikit-learn,
        leveraging machine learning to deliver data-driven insights. My work
        also extends into cutting-edge language models (LLMs), where I've
        implemented projects that harness the power of AI for intelligent
        automation and natural language processing tasks.
      </p>
    </div>
  );
};

export default ProjectComImg;
