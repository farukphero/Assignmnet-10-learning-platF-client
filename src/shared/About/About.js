import React from "react";

const About = () => {
  return (
    <div className="my-20">
      <div className="hero text-black">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://www.brookings.edu/wp-content/uploads/2022/01/CUE_international-day-of-ed2.jpg?w=1200&h=630&crop=1" className="lg:hidden h-72" alt="" />
          <img
            src="https://doortofuture.com/wp-content/uploads/2021/08/Education.jpg"
            className="lg:w-1/2 h-[500px] lg:mr-10 rounded-lg shadow-2xl hidden lg:flex"
          alt=''/>
          <div>
            <h1 className="text-5xl font-bold">An investment in knowledge pays the best interest.</h1>
            <p className="py-6">
            There’s no doubt that the cost of education is on the rise. The financial concerns of earning your education should never stop you from doing so because, as Benjamin Franklin once said, this investment in yourself will pay you back with interest over your entire lifetime. Additionally, you can earn your education in a cost-effective way. 
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
