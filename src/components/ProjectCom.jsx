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

function ProjectCom() {
  return (
    <div className=" grid grid-cols-2 w-full md:grid items-center justify-center gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8 py-3 px-3 mx-auto">
      {projects.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col gap-3 md:gap-3 py-2 px-2 group border w-full  border-accent-hover rounded-lg hover:shadow-[4px_4px_0#00] cursor-pointe hover:bg-zinc-950 hover:-translate-y-1 duration-500 group-hover:text-white items-center mx-auto max-w-[250px] h-[350px]"
          >
            <div className="flex justify-between items-center font-extrabold group-hover:text-primary">
              <img
                src={item.image}
                alt=""
                className="rounded-t-3xl w-[250px] h-[250px]  mx-auto mix-blend-lighten p-5"
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
  );
}

export default ProjectCom;
