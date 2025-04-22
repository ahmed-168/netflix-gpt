import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/QA-en-20250414-TRIFECTA-perspective_7418b76f-ef85-4a51-a04d-8953206c7459_large.jpg"
          alt="netflix-bg"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white">
        <h2 className="text-3xl font-bold p-2 m-2">Sign In</h2>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 "
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2"
        ></input>
        <button className="p-4 m-4 bg-red-700">Signin</button>
      </form>
    </div>
  );
};

export default Login;
