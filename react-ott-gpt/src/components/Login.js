import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkFieldValidation } from "../utils/validation";

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errors, setErrors] = useState([]);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const onToggleSignUp = () => {
        setIsSignIn(!isSignIn);
        setErrors([]);
        // email.current.value = null;
        // password.current.value = null;
        // name.current.value = null;
    }

    const validateFormField = (field) => {
        const isFieldValid = checkFieldValidation(field);
        console.log(isFieldValid);

        setErrors({
            ...errors,
            ...isFieldValid
        })
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
        <h1 className="font-bold text-3xl py-4 text-left m-2">{ isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && <input type="text" placeholder="Enter Full Name" className="w-full p-2 m-2 bg-gray-700" ref={name} onChange={() => validateFormField({name: 'fullname', value: name?.current?.value})}/> }
        <p className="text-red-400 font-bold text-sm text-left m-2">{errors?.fullname}</p>
        <input type="text" placeholder="Enter Email Address" className="w-full p-2 m-2 bg-gray-700" ref={email} onChange={() => validateFormField({name: 'email', value: email?.current?.value})}/>
        <p className="text-red-400 font-bold text-sm text-left m-2">{errors?.email}</p>
        <input type="password" placeholder="Enter Password" className="w-full p-2 m-2 bg-gray-700" ref={password} onChange={() => validateFormField({name: 'password', value: password?.current?.value})}/>
        <p className="text-red-400 font-bold text-sm text-left m-2">{errors?.password}</p>
        <button type="submit" className="w-full bg-red-700 p-2 mx-2 my-4 rounded-lg">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className="py-4 cursor-pointer text-left m-2" onClick={onToggleSignUp}>{isSignIn ? 'New to Netflix? Sign up here.' : 'Already registered? Sign In now.'}</p>
      </form>
    </>
  );
}

export default Login;
