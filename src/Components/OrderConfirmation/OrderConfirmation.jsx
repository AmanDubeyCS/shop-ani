import React from "react";
import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <div className="md:container md:flex mx-auto md:px-4 md:py-8">
      <div className="md:w-[80%]">
        <img
          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white md:p-24 md:pr-16 p-4 pt-20">
        <p className="text-blue-400">Payment successful</p>
        <h2 className="text-4xl font-semibold  mb-4">Thanks for ordering</h2>
        <p className="text-base mb-16">
          We appreciate your order; we're currently processing it. So hang tight
          and we'll send you confirmation very soon!
        </p>
        <h3 className="text-base font-semibold mb-2">Tracking number</h3>
        <p className="text-base text-blue-400 mb-6">515487875568458128</p>

        <div className="space-y-4 rounded-md">
          <div className="flex justify-between items-center border-b-2 py-5">
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
          <div className="space-y-2 py-6">
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
        </div>
        <div className="flex justify-between border-b-2 pb-10 pl-2">
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
            <p>Kristin Watson</p>
            <p>7353 Cynthia Pass</p>
            <p>Toronto, ON N3Y 4H8</p>
          </div>
          <div className="mt-8 pl-2">
            <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
            <p className="mb-3">Ending with 4242</p>
            <p>Expires 12/21</p>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Link to="/">
            <button className="text-blue-400 ">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
