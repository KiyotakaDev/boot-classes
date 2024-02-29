import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { Theme } from "./nav.svgs";

const NavLinks = () => {
  return (
    <ul className="flex flex-col gap-y-8 mt-8">
      <li>
        <Link to="/">
          <div className="sidebar-icon group">
            <img  className="sidebar-icon" src="/home.jpg" alt="home" />
            
            <span className="sidebar-tooltip group-hover:scale-100">Home</span>
          </div>
        </Link>
      </li>
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link to={link.id}>
            <link.Icon size={30} text={link.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  return (
    <div className="flex">
      <nav className="fixed top-0 left-0 h-screen w-[8%] m-0 flex flex-col  shadow-lg bg-blue-200 text-black dark:bg-leveled-950">
        <div className="h-[85%]">
          <NavLinks />
        </div>
        <div className="h-[15%]">
          <Theme color={"white"} size={24} text={"Change theme"} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
