import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const OrderSummary = ({total, tax, shipping = "50", button, to}) => {
  return (
    <div className="px-8 bg-[#F9FAFB] rounded-xl pb-7">
      <dl className="">
        <div className="flex justify-between py-4 border-b-2">
          <dt>Subtotal</dt>
          <dd>₹{Math.round(total)}</dd>
        </div>
        <div className="flex justify-between py-4 border-b-2">
          <dt>Shipping Estimate</dt>
          <dd>₹{shipping}</dd>
        </div>
        <div className="flex justify-between py-4 border-b-2">
          <dt>Tax Estimat</dt>
          <dd>₹{tax}</dd>
        </div>
        <div className="flex justify-between py-4 font-semibold">
          <dt>Order Total</dt>
          <dd>₹{Math.round(total + shipping + tax)}</dd>
        </div>
      </dl>
      <div>
        <Link to={`/${to}`}>
          <Button text={`${button}`} />
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
