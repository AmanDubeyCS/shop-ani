import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialAuthentication from "../SocialAuthentication/SocialAuthentication";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const UserRegistration = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="container w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="w-full md:w-[50%] relative z-0 flex flex-col min-w-0 break-words ">
        <div className="p-6 mb-0 text-center font-semibold text-lg bg-white border-b-0 rounded-t-2xl">
          <h5>Register</h5>
        </div>
        <SocialAuthentication Auth="Sign Up" />
        <div className="flex-auto p-6">
          <form role="form text-left">
            <div className="mb-4 flex flex-col gap-4">
                <TextInput name="Name" placeholder="Name" type="text" />
                <TextInput name="Email" placeholder="Email" type="email" />
                <TextInput name="password" placeholder="Password" type="password" />
            </div>
            <div className="min-h-6 pl-7 mb-0.5 block">
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
            </div>

            <div className="mt-5">
              <Button text="Sign up"/>
            </div>

            <p className="mt-4 mb-0 leading-normal text-sm">
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="font-bold text-slate-700">Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
