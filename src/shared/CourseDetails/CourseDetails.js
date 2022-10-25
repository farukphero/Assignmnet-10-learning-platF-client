import React from "react";
import { useLoaderData } from "react-router-dom";
 

const CourseDetails = (courses_id) => {
   const singleCourse = useLoaderData(courses_id)
   console.log(singleCourse)
    
  return (
    <div>
        {/* <p>jascb {singleCourse.length}</p> */}
      {/* {singleCourse.map((course) => (
        <SingleCourse
    
          SingleCourse={SingleCourse}
        >{SingleCourse.name}</SingleCourse>
      ))} */}
    </div>
  );
};

export default CourseDetails;
