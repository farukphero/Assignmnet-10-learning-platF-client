import React from "react";

const Contact = () => {
  return (
    <div className="my-24">
      <div className="card flex-shrink-0 lg:w-2/3 mx-auto shadow-2xl bg-base-100">
        <h1 className="text-black text-center text-2xl">Contact us</h1>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div>
          <label className="label">
              <span className="label-text">Message</span>
            </label>
          <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
          </div>
           
          <div className="form-control mt-6">
             <input type="submit" value="Submit" className="btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
