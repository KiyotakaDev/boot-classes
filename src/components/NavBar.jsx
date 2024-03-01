import React from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { Theme } from "./nav.svgs";

const NavBar = () => {
  return (
    <div className="flex">
      <nav className="z-10 flex flex-row justify-around items-center lg:flex-col bg-gradient-to-br from-cyan-500 to-cyan-600 dark:bg-gradient-to-r dark:from-leveled-800 dark:to-leveled-950 fixed bottom-0 lg:top-0 lg:left-0 w-full lg:w-36 lg:h-screen m-0 shadow-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.id}
            className={({ isActive }) =>
              isActive ? " bg-cyan-800 dark:bg-white scale-90 transition-all duration-500 rounded-full sm:rounded-3xl lg:rounded-[2.5rem]" : ""
            }
          >
            <link.Icon text={link.name} />
          </NavLink>
        ))}
        <Theme />
      </nav>
    </div>
  );
};

export default NavBar;
