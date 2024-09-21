import ProjectCom from "../components/ProjectCom";
import ProjectComImg from "../components/ProjectComImg";

const Project = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-16 w-full mx-auto px-4">
      <div className="flex flex-col gap-5 p-10">
        <ProjectComImg />
        <ProjectCom />
      </div>
    </section>
  );
};

export default Project;
