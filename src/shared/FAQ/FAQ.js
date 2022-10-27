import React from "react";

const FAQ = () => {
  return (
    <div>
      <h1 className="absolute top-64 md:top-64 lg:top-64 left-0 lg:left-20 text-5xl">
        Welcome to FAQ page.
      </h1>
      <div className="collapse text-center mt-10">
        <input type="checkbox" className="peer" />
        <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
          Which authentication method use in this site?{" "}
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <br />
          <p> Firebase</p>
        </div>
      </div>
      <div className="collapse text-center mt-10">
        <input type="checkbox" className="peer" />
        <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
          Which CSS framework use ?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>tailwind css and daisyUI plugin</p>
        </div>
      </div>
      <div className="collapse text-center mt-10">
        <input type="checkbox" className="peer" />
        <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
          What is react Router JS?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
      </div>
      <div className="collapse text-center mt-10">
        <input type="checkbox" className="peer" />
        <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
          Why are you using firebase?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Use Google Analytics for Firebase to log events at every step of
            your onboarding flow, create funnels to see where users are dropping
            off, and use Remote Config to make changes to your app to see how it
            affects conversions. <br /> <b>Firebase</b> provides tools to grow
            your app and business, for startups & global enterprises. Get your
            app up and running quickly & securely with fully managed backend
            infrastructure. <br /> Google Analytics for Firebase allows you to
            track your users' journey through realtime and custom reporting. As
            mentioned previously, Firebase supports IOS, Android, Web, and Unity
            products, allowing you to track your users across a wide range of
            devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
