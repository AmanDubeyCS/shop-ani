import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/CartContext";
import OrderSummary from "../OrderSummary/OrderSummary";

function OrderConfirmation() {
  const {
    state: { cart },
    dispatch, 
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

        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <div className="space-y-4 bg-[#F9FAFB] rounded-md">
            <div className="px-6 border-b-2 p-5">
              {cart.length > 0 ? (
                cart.map((prod) => (
                  <div className="w-full flex justify-between items-center py-3 border-t-2" key={prod.id}>
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
              button=""
              hidden={true}
              to="orderconfirmation"
            />
          </div>
        </div>
        {/* <div className="flex justify-between border-b-2 pb-10 pl-2">
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
        </div> */}
        <div className="flex justify-end mt-5">
          <Link to="/">
            <button className="text-blue-400 " onClick={() => dispatch({type: 'CLEAR_CART'})}>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
