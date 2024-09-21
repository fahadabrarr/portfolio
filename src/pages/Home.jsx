import React from "react";
import Photo from "../components/Photo";
import Social from "../components/Socials";
import TeckStak from "../components/TeckStak";
import ProjectCom from "../components/ProjectCom";
import ProjectComImg from "../components/ProjectComImg";
import ServiceComp from "../components/ServiceComp";
import ServiceCompImg from "../components/ServiceCompImg";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
  return (
    <section className=" max-w-screen-2xl w-full mx-auto px-4 mt-16">
      <div className="mx-auto p-5 max-w-screen-2xl ">
        <div className="flex flex-col xl:flex-row w-full justify-between px-5 items-center md:min-h-[600px]">
          <div className="gap-3 text-center xl:text-left order-2 xl:order-none items-center justify-center md:justify-start p-5">
            <p className="text-xl text-text_highlight">*</p>
            <p className="text-xl text-text_highlight">**</p>
            <p className="text-xl text-text_highlight mb-3">***</p>
            <h1 className="text-4xl mb-6">
              Hello i'm <br />
              <span className="text-text_highlight ">Fahad Abrar</span>
            </h1>
            <span className="text-2xl text-text_highlight">
              Data Enthusiast
            </span>
            <div className="text-2xl mb-3 text-text_highlight">
              Backend Developer
            </div>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a skilled backend developer and data enthusiast with a strong
              foundation in designing and implementing scalable and efficient
              solutions.My expertise spans across modern backend technologies,
              including Node.js, Express.js, Django REST Framework, Prisma, ML,
              and Langchain along with experience in managing databases using
              MongoDB, SQL and Redis.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <span className="uppercase border-[1px] items-center border-text_highlight hover:bg-hover hover:text-white rounded-lg px-3 py-2">
                Download CV
              </span>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none bottom-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl flex flex-1 flex-col">
        <TeckStak />
      </div>
      <div className="flex flex-col gap-5 pb-5 md:pb-10">
        <ProjectComImg />
        <ProjectCom />
        <div className="border-[3px] border-text_highlight w-full my-2"></div>
      </div>

      <div className="flex flex-col gap-5">
        <ServiceCompImg />
        <ServiceComp />
        <div className="border-[3px] border-text_highlight w-full my-2"></div>
      </div>

      <div className="max-w-screen-2xl flex flex-1 gap-3 py-5 md:py-10 flex-col items-center justify-center">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
export default Home;
