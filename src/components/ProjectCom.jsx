import { BsGithub } from "react-icons/bs";
const projects = [
  {
    title: "E-Commerce API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "ecommerce.svg",
    github: "",
  },
  {
    title: "Education Platform API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "education.svg",
    github: "",
  },
  {
    title: "Job Portal API ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "job_portal.svg",
    github: "",
  },
  {
    title: "Price Prediction (ML)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "price_pred.svg",
    github: "",
  },
  {
    title: "Recommendation System (ML)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "recommendation.svg",
    github: "",
  },
  {
    title: "Review Analysis (ML)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "review.svg",
    github: "",
  },
  {
    title: "Question & Answering (LLM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "question.svg",
    github: "",
  },
  {
    title: "News Paper API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

    image: "news.svg",
    github: "",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error consectetur vitae asperiores, vero mollitia",

  //   image: "portfolio.svg",
  //   github: "",
  // },
];

function ProjectCom() {
  return (
    <div className=" grid grid-cols-2 w-full md:grid items-center justify-center gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8 py-3 px-3 mx-auto">
      {projects.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col gap-3 md:gap-3 py-2 px-2 group border-[1px] justify-center hover:border-text_highlight w-full bg-slate-950 border-accent-hover rounded-lg hover:shadow-[4px_4px_0#00] cursor-pointe hover:bg-zinc-950 hover:-translate-y-1 duration-500 group-hover:text-white items-center mx-auto max-w-[250px] h-[350px] relative"
          >
            <a
              href={item.github}
              className="flex items-center gap-2 hover:text-hover absolute justify-center top-0 py-2 px-5 rounded-2xl mt-2"
            >
              <BsGithub />
              Link
            </a>
            <div className="flex justify-between items-center font-extrabold group-hover:text-primary">
              <img
                src={item.image}
                alt=""
                className="rounded-xl w-[250px] h-[250px]  mx-auto mix-blend-lighten p-5"
              />
            </div>
            <div className="flex flex-col w-full items-center justify-end relative">
              <h2 className=" flex font-semibold text-lg text-center items-center justify-center ">
                {item.title}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCom;
