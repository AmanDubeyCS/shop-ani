import React from "react";

import Cart from "../Components/Cart/Cart";

const CartPage = () => {
  return (
    <div className="">
      <div className="container text-2xl font-bold border-b broder-zinc-500 bg-white text-center py-5">
        Shopping Cart
      </div>
      <Cart />
    </div>
  );
};

export default CartPage;
