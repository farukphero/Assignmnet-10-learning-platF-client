import React from 'react';
import { Outlet } from 'react-router-dom';
import Course from '../shared/Courses/Courses';

const Another = () => {
    return (
        <div>
          <container>
          <row>
           <col>
           </col>
          </row>
            <Outlet></Outlet>
          </container>
        </div>
    );
};

export default Another;