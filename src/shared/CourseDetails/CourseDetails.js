import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const singleCourse = useLoaderData();

  const { _id, picture,name, title, details } = singleCourse;
  return (
    <div className="text-black">
      
      <div ref={ref} className="card bg-base-100 shadow-xl">
        <h1 className="text-center md:text-4xl mt-4">Welcome to {name} page</h1>
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
            <Link to={`/premiumpage/${_id}`}>
              <button className="btn btn-active btn-accent text-white">Get premium access</button>
            </Link>
            <Pdf targetRef={ref} filename="code-example.pdf" scale={0.5}>
        {({ toPdf }) => <button className="btn" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
