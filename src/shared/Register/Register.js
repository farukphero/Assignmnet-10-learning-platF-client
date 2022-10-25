import React from 'react';

const Register = () => {

    
    return (
        <div className="absolute top-16 left-0 md:left-52 lg:left-52">
        <div className="hero min-h-screen">
         <div className="hero-content flex-col">
           <div className="text-center lg:text-left">
             <h1 className="text-5xl font-bold">Register now!</h1>
           </div>
           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
             <form className="card-body">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Name</span>
                 </label>
                 <input
                   type="text"
                   name='name'
                   placeholder="name"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   type="text"
                   name='email'
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
                   name='password'
                   placeholder="password"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Confirm Password</span>
                 </label>
                 <input
                   type="password"
                   name='confirm'
                   placeholder="password"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <button className="btn btn-primary">Register</button>
               </div>
             </form>
           </div>
         </div>
       </div>
      </div>
    );
};

export default Register;