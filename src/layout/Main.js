import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import NavBar from '../shared/NavBar/NavBar';
import './Main.css'
 

const Main = () => {
    return (
        <div>
            <div className="background-picture lg:bg-fixed">
            <NavBar></NavBar>
            </div>
           <div>
           <Outlet></Outlet>
           </div>
           <div>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;