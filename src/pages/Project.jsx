import ProjectCom from "../components/ProjectCom";
import ProjectComImg from "../components/ProjectComImg";

const Project = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-16 w-full mx-auto px-4">
      <div className=" rounded-xl mb-10 pb-20">
        <div className="flex flex-col gap-6 p-10 rounded-xl">
          <ProjectComImg />
          <ProjectCom />
        </div>
      </div>
    </section>
  );
};

export default Project;
