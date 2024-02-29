import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { Theme } from "./nav.svgs";

const NavBar = () => {
  return (
    <div className="flex">
      <nav className="z-10 flex flex-row justify-around items-center lg:flex-col bg-cyan-300 dark:bg-leveled-900 fixed bottom-0 lg:top-0 lg:left-0 w-full lg:w-36 lg:h-screen m-0 shadow-lg">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.id}>
            <link.Icon text={link.name} />
          </Link>
        ))}
        <Theme />
      </nav>
    </div>
  );
};

export default NavBar;
