import React from "react";

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto rounded">
      <h1 className="absolute top-64 md:top-64 lg:top-64 left-0 lg:left-20 text-5xl">
        Welcome to Blog page.
      </h1>
      <div className="text-black mt-20">
        <div>
          <h1 className="text-3xl text-center bg-slate-400 p-4">
            What is cors?
          </h1>
          <p className="bg-cyan-200 p-3">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
      </div>
      <div className="text-black mt-20">
        <div>
          <h1 className="text-3xl text-center bg-slate-400 p-4">
            Why are you using firebase? and 
          </h1>
          <p className="bg-cyan-200 p-3">
            <b>
              Track each step of your onboarding flow to improve the experience.
            </b><br />
            Use Google Analytics for Firebase to log events at every step of
            your onboarding flow, create funnels to see where users are dropping
            off, and use Remote Config to make changes to your app to see how it
            affects conversions. <br /> <b>Firebase</b> provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. <br /> Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
          </p>
        </div>
      </div>
      <div className="text-black mt-20">
        <div>
          <h1 className="text-3xl text-center bg-slate-400 p-4">
          What other options do you have to implement authentication?
          </h1>
          <p className="bg-cyan-200 p-3">
          Auth0, MongoDB, Passport, Okta, Keycloak, JSON Web Token and Amazon Cognito are the most popular alternatives and competitors to Firebase Authentication.
          </p>
        </div>
      </div>
      <div className="text-black mt-20">
        <div>
          <h1 className="text-3xl text-center bg-slate-400 p-4">
          How does the private route work?
          </h1>
          <p className="bg-cyan-200 p-3">
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
          </p>
        </div>
      </div>
      <div className="text-black mt-20">
        <div>
          <h1 className="text-3xl text-center bg-slate-400 p-4">
          What is Node? 
          </h1>
          <p className="bg-cyan-200 p-3">
          A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.
          A node represents the information contained in a single data structure. 
          </p>
        </div>
      </div>
      <div className="text-black mt-20">
        <div>
          <h1 className="text-3xl text-center bg-slate-400 p-4">
          How does Node work?
          </h1>
          <p className="bg-cyan-200 p-3">
          Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. Node JS is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
