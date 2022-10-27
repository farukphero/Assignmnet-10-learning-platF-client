import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon,BookOpenIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import "./NavBar.css";
import { AuthContext } from "../../contexts/AuthProvider";

const NavBar = () => {
  const {user, logOut}= useContext(AuthContext)
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false)

  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(()=>{})
  }

  return (
    <div className="navbar-container bg-slate-400 rounded opacity-75">
      <Link to="/" className="text-2xl lg:text-4xl flex flex-wrap md:flex-nowrap p-2">
      <BookOpenIcon className="h-10 w-10"/>Education<b>Buddies</b>
      </Link>
        
        <div className="flex p-2 mt-1 md:text-xl">
          {
            user ?
             <>
             <h1>{user?.displayName}</h1>
             </>
            : 
            <>
             
            </>
          }
        
           {user?.photoURL ? <img title={user?.displayName} className="h-10 w-10 rounded-full ml-0 md:ml-2 mr-5 md:mr-0 mt-0" src={user?.photoURL} alt="" />:
           <UserCircleIcon className="h-10 w-10"/>
          }

          
        </div>
      <nav
        className={` bg-slate-500 md:bg-slate-400 lg:bg-slate-400 text-center ml-0 grid grid-cols-3 md:flex lg:flex p-2 absolute md:static duration-500 ease-in ${
          open ? "top-20" : "top-[-350px]"
        }`}
      >
        <Link
          className="lg:mr-5  md:flex hover:bg-slate-400 p-3 rounded"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className=" lg:mr-5   md:flex hover:bg-slate-400 p-3 rounded"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className=" lg:mr-5 md:mr-0  md:flex hover:bg-slate-400 p-3 rounded"
          to="/faq"
        >
          FAQ
        </Link>

        {
          user?
          <button onClick={handleLogOut} className="btn btn-active btn-ghost mr-3">Log out</button>
          : 
          <>
           <Link
          className=" lg:mr-5 md:flex hover:bg-slate-400 p-3 rounded"
          to="/login"
        >
          Login
        </Link>
        <Link
          className=" lg:mr-5 md:flex hover:bg-slate-400 p-3 rounded"
          to="/register"
        >
          Register
        </Link>
          </>
        }
       {
        toggle ? <span>dark</span>
        
       
       : <span>light</span>
    
    
 
       }
        <div  onClick={() => setToggle(!toggle)}>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="toggle"/>
            </label>
          </div>
        </div>
      </nav>
      <div
        onClick={() => setOpen(!open)}
        className="h-6 w-6 mt-6 mr-6 md:hidden"
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </div>
  );
};

export default NavBar;
