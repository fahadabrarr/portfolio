import React, { useState } from "react";

const navItems = [
  {
    label: "Home",
    path: "#home",
    className: "nav-link",
  },
  {
    label: "Project",
    path: "#project",
    className: "nav-link",
  },
  {
    label: "Service",
    path: "#service",
    className: "nav-link",
  },
  {
    label: "About",
    path: "#about",
    className: "nav-link",
  },
  {
    label: "Contact",
    path: "#contact",
    className: "nav-link",
  },
];

const Navbar = () => {
  const [path, setPath] = useState("#home");
  return (
    <ul className="flex flex-row space-x-4">
      {navItems.map((item, idx) => {
        return (
          <li
            key={idx}
            className={`${
              path === item.path
                ? " hover:text-hover border-b-2 border-hover transition-opacity duration-500"
                : "text-white transition-all"
            }`}
          >
            <a
              href={item.path}
              className={item.className}
              onClick={() => setPath(item.path)}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
