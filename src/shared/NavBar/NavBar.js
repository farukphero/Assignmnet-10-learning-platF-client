import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
      <div className="navbar-container bg-slate-400 rounded">
        <Link to="/" className="text-3xl lg:text-4xl flex p-6">
          Education <b>Buddies</b>
        </Link>
        <nav
          className={` bg-blue-200 md:bg-slate-400 lg:bg-slate-400 text-center ml-0 md:flex p-6 absolute md:static duration-500 ease-in ${
            open ? "top-20" : "top-[-350px]"
          }`}
        >
          <Link className="mr-6 lg:mr-10 block md:flex" to="/"></Link>
          <Link
            className="mr-6 lg:mr-10  block md:flex hover:bg-slate-400 p-3 rounded"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="mr-6 lg:mr-10 block md:flex hover:bg-slate-400 p-3 rounded"
            to="/courses"
          >
            Courses
          </Link>
          <Link
            className="mr-6 lg:mr-10  block md:flex hover:bg-slate-400 p-3 rounded"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="mr-6 lg:mr-10 md:mr-0 block md:flex hover:bg-slate-400 p-3 rounded"
            to="/faq"
          >
            FAQ
          </Link>
         <div className>
         <button onClick={toggleTheme}
            className="mr-6 lg:mr-10 md:mr-0 block md:flex p-3 rounded"
            to="/theme"
          >
           <input type="checkbox" className="toggle" checked />
          </button>
         </div>
        </nav>
        <div
          onClick={() => setOpen(!open)}
          className="h-6 w-6 mt-6 mr-6 md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
      </div>
  );
};

export default NavBar;
