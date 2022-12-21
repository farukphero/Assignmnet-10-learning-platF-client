import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Header = () => {
  return (
    <section>

<div className="absolute top-64 md:top-64 lg:top-64 left-0 lg:left-20 whitespace-pre-wrap pl-3">
      <h1> WELCOME TO EDUCATION BUDDIES</h1>
      <h1 className="text-6xl md:text-6xl lg:text-5xl md:w-11/12 lg:w-2/3">
        <b>Best Online Education Expertise</b>
      </h1>
      <p className="mt-3 text-xl md:text-3xl lg:text-xl md:w-11/12 lg:w-2/3">
        Education is the passport to the future, for tomorrow belongs to those
        who prepare for it today.
      </p>
      <Link to="/courses">
        <button className="btn btn-active btn-info md:btn-ghost lg:btn-ghost mt-12 md:mt-6 lg:mt-10">
          View Courses
          <ArrowSmallRightIcon className="h-6 w-6" />
        </button>
      </Link>
    </div>
    <About></About>
    <Contact></Contact>
    </section>
  );
};

export default Header;
