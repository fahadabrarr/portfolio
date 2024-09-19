import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    path: "/",
    className: "nav-link",
  },
  {
    label: "Project",
    path: "/project",
    className: "nav-link",
  },
  {
    label: "Service",
    path: "/service",
    className: "nav-link",
  },
  {
    label: "About",
    path: "/about",
    className: "nav-link",
  },
  {
    label: "Contact",
    path: "/contact",
    className: "nav-link",
  },
];

const Navbar = () => {
  const [path, setPath] = useState("#home");
  return (
    <nav className="flex flex-row space-x-4">
      {navItems.map((item, idx) => {
        return (
          <NavLink
            to={item.path}
            key={idx}
            className={`${
              path === item.path
                ? " hover:text-hover border-b-2 border-hover transition-opacity duration-500"
                : "text-white transition-all"
            }`}
            onClick={() => setPath(item.path)}
          >
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
