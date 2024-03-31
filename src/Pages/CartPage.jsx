import React from "react";

import Cart from "../Components/Cart/Cart";

const CartPage = () => {
  return (
    <div className="container">
      <div className="text-2xl font-bold border-b broder-zinc-500 bg-white mb-2 text-center py-5">
        Shopping Cart
      </div>
      <Cart />
    </div>
  );
};

export default CartPage;
