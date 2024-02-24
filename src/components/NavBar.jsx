import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex gap-x-5 justify-around">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link to={link.id}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  return (
    <nav className="w-full justify-between fixed top-0 left-0  bg-slate-900 backdrop-filter backdrop-blur-md bg-opacity-20 flex items-center">
      <div className="px-6 py-2">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/my.png"
            alt="logo"
            className="rounded-full w-24 h-auto hover:scale-105 transition-transform duration-200 ease"
          />
        </Link>
      </div>

      <div className="w-1/2">
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
