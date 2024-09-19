import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
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
            className="border border-accent-default h-10 w-10 flex justify-center items-center rounded-lg text-white hover:text-primary hover:bg-accent-hover transition-all duration-500"
          >
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Social;
