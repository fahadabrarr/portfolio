const ServiceCompImg = () => {
  return (
    <div className="flex flex-col items-center justify-between mx-auto py-3">
      <div className="flex flex-col items-center justify-center">
        <img
          src="service.svg"
          alt=""
          className=" rounded-lg w-[350px] h-[350px] mx-auto mix-blend-lighten"
        />
        <div className="border-[3px] border-text_highlight w-full"></div>
        <h1 className="text-text_highlight font-thin px-5 pb-5 text-2xl mt-2">
          {" "}
          {` ----- MY SERVICES -----`}{" "}
        </h1>
      </div>

      <p className="max-w-[750px] text-center p-3 cursor-none text-white/60 border rounded-lg border-accent-hover hover:text-zinc-50 hover:font-thin hover:bg-zinc-950 duration-500 ">
        I offer a complete web development services, from front-end design to
        back-end architecture. My expertise extends to data science, including
        NLP, machine learning, and LangChain. Additionally, I provide strategic
        digital marketing services to help businesses grow, backed by
        cutting-edge AI and data-driven insights.
      </p>
    </div>
  );
};

export default ServiceCompImg;
