import React, { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { CartState } from "../../Context/CartContext";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.Price - (curr.Discount / 100) * curr.Price) * curr.qty, 0))
  }, [cart])

  const tax = Math.round((total * 0.18) + total)
  return (
    <div className="container w-full bg-white md:p-8 p-2">
      <div className="text-2xl font-bold border-b broder-zinc-500 md:w-[50%]">
        CART
      </div>
      <div className="w-full md:flex justify-between">
        <ul className="w-full md:w-[50%]">
          {cart.length > 0 ? (
            cart.map((prod) => (
              <li className="flex py-8 border-b-2" key={prod.id}>
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
                        type: "CHANGE_CARY_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value
                        }
                      })
                    }}
                      name="quantity"
                      id="quantity"
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
                        <h3 className="text-xl line-clamp-1">{prod.Name}</h3>
                      </div>
                      <div>
                        <p className="text-zinc-500">{prod.Type}</p>
                      </div>
                      <div className="text-[18px] font-medium text-black pb-2 px-4 md:px-0">
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
                             type: "CHANGE_CARY_QTY",
                             payload: {
                               id: prod.id,
                               qty: e.target.value
                             }
                           })
                         }}
                          name="quantity"
                          id="quantity"
                          className="h-10 w-12 border border-black font-medium"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div
                        className="absolute right-0 top-0"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          });
                        }}
                      >
                        <IconX stroke={2} size={25} />
                      </div>
                    </div>
                  </div>
                  <p>In Stock</p>
                </div>
              </li>
            ))
          ) : (
            <div>nothig</div>
          )}
        </ul>
        <div className="p-8 bg-[#F9FAFB] rounded-xl md:w-[40%] mt-8 md:mt-0">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <dl className="mt-5">
            <div className="flex justify-between py-4 border-b-2">
              <dt>Subtotal</dt>
              <dd>₹ {Math.round(total)}</dd>
            </div>
            <div className="flex justify-between py-4 border-b-2">
              <dt>Shipping Estimate</dt>
              <dd>₹ 50</dd>
            </div>
            <div className="flex justify-between py-4 border-b-2">
              <dt>Tax Estimat</dt>
              <dd>₹ {tax}</dd>
            </div>
            <div className="flex justify-between py-4 font-semibold">
              <dt>Order Total</dt>
              <dd>₹ {Math.round(total + 50 + tax)}</dd>
            </div>
          </dl>
          <div>
            <Link to="/checkout">
              <Button text="Checkout" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
