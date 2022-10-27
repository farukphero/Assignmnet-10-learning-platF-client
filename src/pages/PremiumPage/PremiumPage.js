import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumPage = () => {
    const singleCourse = useLoaderData()
    console.log(singleCourse)
    const { title } = singleCourse;
    return (
        <div className='text-black'>
            <h1 className='text-center text-2xl'>This is premium page on {title}</h1>
        </div>
    );
};

export default PremiumPage;