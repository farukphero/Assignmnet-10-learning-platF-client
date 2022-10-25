import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon,BookOpenIcon } from "@heroicons/react/24/solid";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-container bg-slate-400 rounded opacity-75">
      <Link to="/" className="text-3xl lg:text-4xl flex p-6">
      <BookOpenIcon className="h-10 w-10"/>Education<b>Buddies</b>
      </Link>
      <nav
        className={` bg-slate-500 md:bg-slate-400 lg:bg-slate-400 text-center ml-0 grid grid-cols-3 md:flex lg:flex p-6 absolute md:static duration-500 ease-in ${
          open ? "top-20" : "top-[-350px]"
        }`}
      >
        <Link
          className=" lg:mr-10  md:flex hover:bg-slate-400 p-3 rounded"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className=" lg:mr-10   md:flex hover:bg-slate-400 p-3 rounded"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className=" lg:mr-10 md:mr-0  md:flex hover:bg-slate-400 p-3 rounded"
          to="/faq"
        >
          FAQ
        </Link>
        <Link
          className=" lg:mr-10 md:flex hover:bg-slate-400 p-3 rounded"
          to="/login"
        >
          Login
        </Link>
        <Link
          className=" lg:mr-10 md:flex hover:bg-slate-400 p-3 rounded"
          to="/register"
        >
          Register
        </Link>
        <div className>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="toggle" checked />
            </label>
          </div>
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
