import React from 'react';

const Course = ({course}) => {
    const {email,picture} = course
    return (
        <div>
            <h1>{email}</h1>
            <img src={picture} alt="" />
        </div>
    );
};

export default Course;