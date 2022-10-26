import React from "react";
import { useLoaderData } from "react-router-dom";
 

const CourseDetails = () => {
   const singleCourse = useLoaderData()
 
  const {picture, title, details} =singleCourse 
  return (
    <div className="text-black">
       <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full lg:w-8/12 mt-0 md:mt-10 rounded md:h-96" src={picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p> {details} </p>
          <div className="card-actions justify-end">
          <button className="btn btn-active btn-accent">Premium</button>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
