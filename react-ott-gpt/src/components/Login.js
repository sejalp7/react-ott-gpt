import React, { useState } from "react";
import Header from "./Header";

function Login() {
    const [isSignIn, setIsSignIn] = useState(true)

    const onToggleSignUp = () => {
        setIsSignIn(!isSignIn);
    }
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/ce02e9c7-f02a-48f8-afed-7c7667826cb2/DE-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-40 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{ isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && <input type="text" placeholder="Enter Full Name" className="w-full p-2 m-2 bg-gray-700"/> }
        <input type="text" placeholder="Enter Email Address" className="w-full p-2 m-2 bg-gray-700"/>
        <input type="password" placeholder="Enter Password" className="w-full p-2 m-2 bg-gray-700"/>
        <button type="submit" className="w-full bg-red-700 p-2 mx-2 my-4 rounded-lg">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className="py-4 cursor-pointer" onClick={onToggleSignUp}>{isSignIn ? 'New to Netflix? Sign up here.' : 'Already registered? Sign In now.'}</p>
      </form>
    </>
  );
}

export default Login;
