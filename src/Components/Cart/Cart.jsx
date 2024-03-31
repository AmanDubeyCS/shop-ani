import React, { useEffect, useState } from "react";
import { CartState } from "../../Context/CartContext";
import OrderSummary from "../OrderSummary/OrderSummary";
import { IconShoppingBag } from '@tabler/icons-react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { IconTrash } from '@tabler/icons-react';

const Cart = () => {
  const [total, setTotal] = useState();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) =>
          acc +
          Number(curr.Price - (curr.Discount / 100) * curr.Price) * curr.qty,
        0
      )
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const tax = Math.round(total * 0.18 + total);

  return (
    <div className="w-full bg-white md:p-8 p-2">
      <div className="w-full md:flex justify-between">
        
          {cart.length > 0 ? (
            cart.map((prod) => (
              <div className="w-full md:w-[50%]">
              <div className="flex py-8 border-b-2" key={prod.id}>
                <div className="w-[25%]">
                  <img
                    src={prod?.Image?.Front}
                    alt="product Image"
                    className="w-full h-full"
                  />
                  <div className="md:hidden">
                    <label htmlFor="quantity"></label>
                    <select
                      value={prod.qty}
                      onChange={(e) => {
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        });
                      }}
                      name="quantity"
                      id="qty"
                      className="w-full text-center border border-black font-medium"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col text-base ml-6 justify-between w-[75%]">
                  <div className="flex justify-between ">
                    <div className="flex flex-col gap-1 w-[80%]">
                      <div>
                        <h3 className="text-base line-clamp-1">{prod.Name}</h3>
                      </div>
                      <div>
                        <p className="text-zinc-500">{prod.Type}</p>
                      </div>
                      <div className="text-[18px] font-medium text-black pb-2  md:px-0">
                        {" "}
                        {/*Product Price With Discount */}₹
                        {Math.round(
                          prod.Price - (prod.Discount / 100) * prod.Price
                        )}{" "}
                        <span className="text-[14px] line-through text-gray-500 mr-3">
                          {prod.Price}
                        </span>
                        <span className="text-[14px] text-green-500 ">
                          {prod.Discount}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between md:w-[50%] relative">
                      <div className="hidden md:flex">
                        <label htmlFor="quantity"></label>
                        <select
                          value={prod.qty}
                          onChange={(e) => {
                            dispatch({
                              type: "CHANGE_CART_QTY",
                              payload: {
                                id: prod.id,
                                qty: e.target.value,
                              },
                            });
                          }}
                          name="quantity"
                          id="quantity"
                          className="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div
                        className="absolute right-0 top-0 cursor-pointer"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          });
                        }}
                      >
                        <IconTrash stroke={2} size={25}/>
                      </div>
                    </div>
                  </div>
                  <p>In Stock</p>
                </div>
              </div>
              </div>
            ))
          ) : (
            <div className="container flex items-center justify-center flex-col gap-2 p-4 h-[50dvh]">
              <div className="flex flex-col items-center gap-2 text-center">
              <IconShoppingBag stroke={2} size={75}/>
                <div className="flex flex-col items-center gap-2">
                  <h1 className="font-bold text-3xl tracking-tight">
                    Your cart is empty
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    You haven't added any items to your cart yet
                  </p>
                </div>
              </div>
              <Link to="/">
                <Button text="Continue Shopping" props={'p-5'} />
              </Link>
            </div>
          )}
        {!cart.length < 1 && (
          <div className="md:w-[40%]">
            <h2 className="text-lg font-bold bg-[#F9FAFB] px-8 py-6">
              Order Summary
            </h2>
            <OrderSummary
              total={total}
              tax={tax}
              button="Checkout"
              to="checkout"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
