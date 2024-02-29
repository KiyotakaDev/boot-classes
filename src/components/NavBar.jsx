import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { Theme } from "./nav.svgs";

const NavLinks = () => {
  return (
    <ul className="flex flex-row lg:flex-col justify-between items-center p-2 lg:h-full">
      {navLinks.map((link) => (
        <li key={link.name} className="">
          <Link to={link.id}>
            <link.Icon size={30} text={link.name} />
          </Link>
        </li>
      ))}
      <div>
        <Theme color={"white"} size={24} text={"Change theme"} />
      </div>
    </ul>
  );
};

const NavBar = () => {
  return (
    <nav className="fixed z-10 bottom-0 left-0 bg-cyan-300 dark:bg-leveled-900 w-full h-auto overflow-x-scroll lg:top-0 lg:h-screen lg:w-[8.5rem]">
      <NavLinks />
    </nav>
  );
};

export default NavBar;
