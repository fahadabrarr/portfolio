import { BsGithub } from "react-icons/bs";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb1.png",
    github: "",
  },
  {
    num: "02",
    category: "backend",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb2.png",
    github: "",
  },
  {
    num: "03",
    category: "data science",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb3.png",
    github: "",
  },
  {
    num: "04",
    category: "data science",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb1.png",
    github: "",
  },
  {
    num: "04",
    category: "data science",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb2.png",
    github: "",
  },
  {
    num: "04",
    category: "data science",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb3.png",
    github: "",
  },
  {
    num: "04",
    category: "data science",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb1.png",
    github: "",
  },
  {
    num: "04",
    category: "data science",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "thumb1.png",
    github: "",
  },
];

const Project = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-16 w-full mx-auto px-4">
      <div className=" rounded-xl mb-10 pb-20">
        <div className="flex flex-col gap-6 p-10 rounded-xl">
          <div className="flex items-center justify-center">
            <h3 className="text-4xl text-accent-hover p-3">
              Innovative Technology Services
            </h3>
          </div>
        </div>
        <div className=" flex flex-col md:grid items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 py-3 px-3 mx-auto">
          {projects.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-3 md:gap-3 py-2 px-2 group border border-accent-hover rounded-lg hover:shadow-[4px_4px_#000] cursor-pointe hover:bg-zinc-950 hover:-translate-y-1 duration-500 group-hover:text-white items-center mx-auto max-w-[250px] h-[350px]"
              >
                <div className="flex justify-between items-center font-extrabold group-hover:text-primary">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-t-3xl w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] mx-auto mix-blend-lighten p-5"
                  />
                </div>
                <div className="flex-1 flex-col w-full items-end justify-end relative">
                  <h2 className="font-semibold text-2xl text-center group-hover:text-hover ">
                    {item.title}
                  </h2>
                  <a
                    href={item.github}
                    className="flex items-center gap-2 hover:text-hover absolute left-0 bottom-0 p-3"
                  >
                    <BsGithub />
                    link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-3">
        <img
          src="service.svg"
          alt=""
          className=" rounded-full w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] mx-auto mix-blend-lighten p-5"
        />

        <p className="max-w-[750px] text-center p-3 text-white/60 border rounded-lg border-accent-hover hover:bg-zinc-950 hover:-translate-y-1 duration-500 ">
          I offer a complete web development services, from front-end design to
          back-end architecture. My expertise extends to data science, including
          NLP, machine learning, and LangChain. Additionally, I provide
          strategic digital marketing services to help businesses grow, backed
          by cutting-edge AI and data-driven insights.
        </p>
      </div>
    </section>
  );
};

export default Project;
