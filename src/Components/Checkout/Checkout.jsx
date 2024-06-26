import React, { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import PaymentOptions from "../PymentOptions/PaymentOptions";
import { CartState } from "../../Context/CartContext";
import OrderSummary from "../OrderSummary/OrderSummary";
import AddressForm from "../AddressForm/AddressForm";

const Checkout = () => {
  const {
    state: { cart },
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) =>
          acc +
          Number(curr.Price - (curr.Discount / 100) * curr.Price) * curr.qty,
        0
      )
    );
  }, [cart]);

  const tax = Math.round(total * 0.18);

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
          <div className="border-b-2"> 
            <AddressForm />
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
            <div className="px-6 border-b-2 p-5">
              {cart.length > 0 ? (
                cart.map((prod) => (
                  <div
                    className="w-full flex justify-between items-center py-3 border-t-2"
                    key={prod.id}
                  >
                    <div className="flex space-x-2">
                      <img
                        alt="Basic Tee"
                        className="h-16 w-16"
                        height="64"
                        src={prod?.Image?.Front}
                        style={{
                          aspectRatio: "64/64",
                          objectFit: "cover",
                        }}
                        width="64"
                      />
                      <div>
                        <p className="line-clamp-1">{prod.Name}</p>
                        <p>{prod.Type}</p>
                      </div>
                    </div>
                    <div className="flex flex-nowrap items-center space-x-2">
                      <p>
                        ₹
                        {Math.round(
                          prod.Price - (prod.Discount / 100) * prod.Price
                        )}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <OrderSummary
              total={total}
              tax={tax}
              button="Place Order"
              to="orderconfirmation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
