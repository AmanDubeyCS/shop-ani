import React from "react";
import Button from "../Button/Button";

const Newsletter = () => {
  return (
    <div className="mt-4">
      <div className="container flex flex-col items-end justify-center light">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>

        <form className="flex flex-col">
          <input
            placeholder="Enter your email address"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
          />

          <Button text="Subscribe"/>
        </form>

        <div className="flex justify-center mt-4">
          <a className="text-sm text-gray-600 hover:underline" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;
