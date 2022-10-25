import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const [user, setUser]= useState('')
  const [passwordError, setPasswordError]=useState('')
  const {signInWithEmail} = useContext(AuthContext)
    const {providerLogIn}= useContext(AuthContext)
    const {providerGitHubLogIn}=useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider();

    const handleEmailPassword=(event)=>{
      event.preventDefault()
      const form =event.target
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value
      const confirm = form.confirm.value
      if(password.length < 8){
        setPasswordError('password should be 8 character')
        return
      }
       
      signInWithEmail(name,email,password)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        setPasswordError(error.message);
      });
    
      console.log(email,password,confirm)
    
    }


    const handleGoogleSignIn=()=>{
        providerLogIn(provider)
        .then(result=>{
            const userr =result.user
            setUser(userr)
            console.log(userr)
        })
        .catch(error=>{
            
        })
    }

    const handleGitSignIn=()=>{
      providerGitHubLogIn(gitProvider)
      .then(result=>{
        const userr =result.user
        setUser(userr)
        console.log(userr)
    })
    .catch(error=>{
        
    })
      
    }
  return (
   <div className="absolute top-24 md:top-6 lg:top-16 left-0 md:left-40 lg:left-52">
     <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
          <form onSubmit={handleEmailPassword} className="card-body">
            <div className="form-control w-72">
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
              <button className="btn btn-info">Login</button>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent mt-4"> Log in with google</button>
            <button onClick={handleGitSignIn} className="btn btn-outline btn-accent mt-4"> Log in with GitHub</button>
            </div>
            <p>{passwordError}</p>
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
