import React from "react";
import Photo from "../components/Photo";
import Social from "../components/Socials";

import Service from "../pages/Service";
import Project from "../pages/Project";
import Contact from "./Contact";
import TeckStak from "../components/TeckStak";

const Home = () => {
  return (
    <section className=" max-w-screen-2xl w-full mx-auto px-4">
      <div className="mx-auto p-5 max-w-screen-2xl ">
        <div className="flex flex-col xl:flex-row w-full justify-between px-5 items-center md:min-h-[600px]">
          <div className="gap-3 text-center xl:text-left order-2 xl:order-none items-center justify-center md:justify-start p-5">
            <p className="text-xl text-hover">*</p>
            <p className="text-xl text-hover">**</p>
            <p className="text-xl text-hover mb-3">***</p>
            <h1 className="text-4xl mb-6">
              Hello i'm <br />
              <span className="text-hover ">Fahad Abrar</span>
            </h1>
            <span className="text-xl">Data Enthusisat</span>
            <div className="text-xl mb-3">Backend Developer</div>
            <p className="max-w-[500px] mb-9 text-white/80">
              {" "}
              I excel at crafting elegant digital experience and I am proficient
              in various programing language and technologies
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <span className="uppercase items-center border hover:bg-hover hover:text-primary rounded-lg px-3 py-1">
                Download CV
              </span>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl flex flex-1 flex-col">
        <TeckStak />
      </div>
      <Project />
      <Service />
      <Contact />
    </section>
  );
};

export default Home;
