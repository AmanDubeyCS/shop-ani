import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import PaymentOptions from "../PymentOptions/PaymentOptions";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("standard");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="container bg-white p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-8">
          <div className="border-b-2 pb-8">
            <h2 className="text-lg font-semibold pb-2">Contact information</h2>
            <TextInput type="email" placeholder="Email address" />
          </div>
          <div className="border-b-2 pb-8">
            <h2 className="text-lg font-semibold pb-2">Shipping information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <TextInput type="text" placeholder="First name" />
              <TextInput type="text" placeholder="Last name" />
            </div>
            <TextInput type="text" placeholder="Company" />
            <TextInput type="text" placeholder="Address" />
            <TextInput type="text" placeholder="Apartment, suite, etc." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput type="text" placeholder="City" />
              <select className="border border-solid border-gray-300 rounded-lg outline-none mb-3">
                <option value="united-states">United States</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput type="text" placeholder="State / Province" />
            <TextInput type="text" placeholder="Postal code" />
            </div>
            <TextInput type="tel" placeholder="Phone" />

          </div>
          <div className="border-b-2 pb-8">
            <h2 className="text-lg font-semibold mb-4">Delivery method</h2>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <label
                className={`w-full md:w-[50%] flex items-center p-4 rounded-md cursor-pointer border ${
                  selectedOption === "standard"
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="standard"
                  checked={selectedOption === "standard"}
                  onChange={handleOptionChange}
                  className="mr-2 cursor-pointer hidden"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">Standard</span>
                  <span className="text-sm">4-10 business days</span>
                  <span className="text-sm font-semibold mt-6">$5.00</span>
                </div>
              </label>
              <label
                className={`w-full md:w-[50%] flex items-center p-4 rounded-md cursor-pointer border ${
                  selectedOption === "express"
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="express"
                  checked={selectedOption === "express"}
                  onChange={handleOptionChange}
                  className="mr-2 cursor-pointer hidden"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">Express</span>
                  <span className="text-sm">2-5 business days</span>
                  <span className="text-sm font-semibold mt-6">$16.00</span>
                </div>
              </label>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Payment</h2>
            <PaymentOptions />
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <div className="space-y-4 bg-[#F9FAFB] rounded-md">
            <div className="flex justify-between items-center px-6 border-b-2 p-5">
              <div className="flex space-x-2">
                <img
                  alt="Basic Tee"
                  className="h-16 w-16"
                  height="64"
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div>
                  <p>Basic Tee</p>
                  <p>T-shirt</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p>$32.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 px-6 p-5">
              <div className="flex space-x-2">
                <img
                  alt="Basic Tee"
                  className="h-16 w-16"
                  height="64"
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div>
                  <p>Basic Tee</p>
                  <p>T-shirt</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p>$32.00</p>
              </div>
            </div>
            <div className="space-y-2 px-6">
              <div className="flex justify-between pb-2">
                <p>Subtotal</p>
                <p>$64.00</p>
              </div>
              <div className="flex justify-between pb-2">
                <p>Shipping</p>
                <p>$5.00</p>
              </div>
              <div className="flex justify-between border-b-2 pb-2">
                <p>Taxes</p>
                <p>$5.52</p>
              </div>
              <div className="flex justify-between font-semibold ">
                <p>Total</p>
                <p>$75.52</p>
              </div>
            </div>
            <div className="p-6 border-t-2">
            <Link to='/orderconfirmation'><button className="w-full h-12 bg-red-500 flex items-center justify-center cursor-pointer duration-[0.5s] overflow-hidden shadow-[0px_5px_10px_rgba(0,0,0,0.103)] relative md:rounded-md border-[none] md:active:duration-[0.5s] md:active:scale-95 ">Place order</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
