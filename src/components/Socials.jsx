import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/fahadabrarr" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/fahadabrarr" },
  { icon: <FaTwitter />, path: "" },
];
const Social = () => {
  return (
    <div className="flex xl:flex-row gap-6 justify-center items-center">
      {socials.map((item, idx) => {
        return (
          <NavLink
            to={item.path}
            key={idx}
            className="border-[1px] border-text_highlight h-10 w-10 flex justify-center items-center rounded-lg text-white hover:text-hover hover:bg-zinc-950 transition-all duration-500"
          >
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Social;
