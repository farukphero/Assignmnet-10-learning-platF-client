import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then( res=> res.json())
        .then( data=> setCourses(data))
    },[])
    return (
        <div className='text-black'>
            {
                courses.map(course=> <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;