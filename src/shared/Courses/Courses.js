import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then( res=> res.json())
        .then( data=> setCourses(data))
    },[])
    return (
        <div>
            <h1 className='absolute top-64 md:top-64 lg:top-64 left-0 lg:left-20 text-5xl'>Welcome to courses page.</h1>
            <div className='text-black grid grid-cols-3 gap-12 mt-11  ml-5 mr-5'>
            <div className='hidden md:block md:col-end-1 md:col-span-1'>
            {
                courses.map(course=> <li className='hover:underline hover:text-blue-600' key={course._id} ><Link to={`/coursedetails/${course._id}`}>{course.name}</Link></li>)
            }
            </div>
            <div className='col-start-1 col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                courses.map(course=> <Course key={course._id} course={course}></Course>)
            }
            </div>
            </div>
        </div>
        </div>
    );
};

export default Courses;