import React from "react";
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
  return (
    <div className="absolute  md:top-28 top-64 left-0 lg:left-20 whitespace-pre-wrap pl-3">
        <h1>WELCOME TO EDUCATION BUDDIES</h1>
      <h1 className="text-7xl md:text-5xl lg:text-5xl md:w-2/3">
        Best Online Education Expertise
    </h1>
    <button className="btn btn-active btn-ghost mt-10">View Courses   <ArrowSmallRightIcon className="h-6 w-6"/></button>
    </div>
  );
};

export default Header;
