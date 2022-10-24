import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import './Main.css'
 


const Main = () => {
    return (
        <div>
            <div className="background-picture pt-0 lg:pt-12 lg:bg-fixed">
            <NavBar></NavBar>
            </div>
           <div>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Main;