import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
 
  
const Register = () => {
  const navigate = useNavigate();
  // const [passwordError, setPasswordError]=useState('')
  const { createUserByEmail,updateName,emailVerify } = useContext(AuthContext)

  const handleEmailPassword=(event)=>{
    event.preventDefault()
    
    const form =event.target
    const name = form.name.value
    const email = form.email.value
    const photo = form.photoURL.value
    const password = form.password.value
    const confirm = form.confirm.value

    // if(password.length < 8){
    //   setPasswordError('password should be 8 character')
    //   return
    // }
     
    createUserByEmail(email,password)
    .then((result) => {
      const user = result.user;
      emailVerify()
      updateName()
      navigate('/')
      console.log(user)
      // setUser(user)
    })
    .catch((error) => {
       console.log(error.message);
    });
  
    console.log(photo,name,email,password,confirm)
  
  }

    
   
    return (
        <div className="absolute top-24 md:top-5 lg:top-14 left-0 md:left-40 lg:left-52">
        <div className="hero min-h-screen">
         <div className="hero-content flex-col">
           <div className="text-center lg:text-left">
             <h1 className="text-3xl font-bold">Register now!</h1>
           </div>
           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
             <form onSubmit={handleEmailPassword} className="card-body">
               <div className="form-control w-72">
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
                   <span className="label-text">PhotoURL</span>
                 </label>
                 <input
                   type="text"
                   name='photoURL'
                   placeholder="photoURL"
                   className="input input-bordered"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   type="email"
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
               {/* <p>{passwordError}</p> */}
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