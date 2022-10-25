import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { courses_id,name, picture, details } = course;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full md:h-96" src={picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p> {details.slice(0, 100)+'...'} <Link to={`/coursedetails/${courses_id}`}>read more</Link></p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
