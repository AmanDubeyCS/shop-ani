import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthentication from "../SocialAuthentication/SocialAuthentication";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { auth } from "../../Config/Firbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const UserRegistration = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const naviagate = useNavigate()
  // const [userCredentials, setUserCredentials] = useState({});

  const handleNameChange = (e) => setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleMethodChange = () => {
    setIsSignUpActive((prev) => !prev)
  }

 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const userCredential = await createUserWithEmailAndPassword(auth, email,password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      naviagate("/")
    } catch (error) {
      const erroeCode = error.code;
      const errorMassage = error.message;
      console.log(erroeCode, errorMassage);
    }
    setLoading(false)
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const userCredential = await signInWithEmailAndPassword(auth, email,password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      naviagate("/")
    } catch (error) {
      const erroeCode = error.code;
      const errorMassage = error.message;
      console.log(erroeCode, errorMassage);
    }
    setLoading(false)
  };

  return (
    <div className="container w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="w-full md:w-[50%] relative z-0 flex flex-col min-w-0 break-words ">
        <div className="p-6 mb-0 text-center font-semibold text-lg bg-white border-b-0 rounded-t-2xl">
         {!isSignUpActive && <h5>Register</h5>}
         {isSignUpActive && <h5>Login</h5>}
        </div>
        {!isSignUpActive && <SocialAuthentication Auth="Sign Up" />}
        {isSignUpActive && <SocialAuthentication Auth="Sign In" />}
        <div className="flex-auto p-6">
          <form onSubmit={!isSignUpActive ? handleRegister : handleLogin}>
            <div className="mb-4 flex flex-col gap-4">
              {!isSignUpActive && <TextInput
                name="name"
                placeholder="Name"
                type="text"
                onChange={(e) => {
                  handleNameChange(e);
                }}
              />}
              <TextInput
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
              <TextInput
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
            </div>
            {!isSignUpActive && <div className="min-h-6 pl-7 mb-0.5 block">
              <input
                checked={checked}
                value=""
                type="checkbox"
                onChange={(e) => setChecked((prev) => !prev)}
                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                id="terms"
              />
              <label
                htmlFor="terms"
                className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
              >
                {" "}
                I agree the{" "}
                <a className="font-bold text-slate-700">Terms and Conditions</a>
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 inline ml-1 fill-current text-green-500"
                >
                  <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"></path>
                </svg>
              </label>
            </div>}

            <div className="mt-5" >
              {!isSignUpActive && <Button
                disabled ={loading}
                type="submit"
                text="Sign up"
              />}
              {isSignUpActive && <Button
              disabled ={loading}
                type="submit"
                text="Login"
              />}
            </div>
          </form>
          <p className="mt-4 mb-0 leading-normal text-sm">
            Already have an account?{" "}
            {isSignUpActive && <Link to={"/login"}>
              <span className="font-bold text-slate-700" onClick={handleMethodChange}> Sign in</span>
            </Link>}
            {!isSignUpActive && <Link to={"/registration"}>
              <span className="font-bold text-slate-700" onClick={handleMethodChange}> Sign in</span>
            </Link>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
