import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {providerLogIn}= useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
        providerLogIn(provider)
        .then(result=>{
            const user =result.user
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
  return (
   <div className="absolute top-24 md:top-16 lg:top-16 left-0 md:left-52 lg:left-52">
     <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email/number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn btn-outline btn-accent">Login</button>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent mt-4"> Log in with google</button>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent mt-4"> Log in with GitHub</button>
            </div>
            <label className="label">
            <p>New for learning <small><Link to='/register'>Create a new account</Link></small></p>
              </label>
          </form>
          
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;
