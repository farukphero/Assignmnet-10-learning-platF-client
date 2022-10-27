import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const singleCourse = useLoaderData();

  const { courses_id, picture, title, details } = singleCourse;
  return (
    <div className="text-black">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full lg:w-8/12 mt-0 md:mt-10 rounded md:h-96"
            src={picture}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p> {details} </p>
          <div>
            <div class="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                 
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/premiumpage/${courses_id}`}>
              <button className="btn btn-active btn-accent">Premium</button>
            </Link>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
