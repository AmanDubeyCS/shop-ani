import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { IconFileDatabase } from "@tabler/icons-react";

const OrderSummary = ({total, tax, shipping = "50", button, to, hidden=false, onClick}) => {
  return (
    <div className="px-8 bg-[#F9FAFB] rounded-xl pb-7">
      <dl className="">
        <div className="flex justify-between py-4 border-b-2">
          <dt>Subtotal</dt>
          <dd> &#8377;{" "}{Math.round(total)}</dd>
        </div>
        <div className="flex justify-between py-4 border-b-2">
          <dt>Shipping Estimate</dt>
          <dd>&#8377;{shipping}</dd>
        </div>
        <div className="flex justify-between py-4 border-b-2">
          <dt>Tax Estimat</dt>
          <dd>&#8377;{tax}</dd>
        </div>
        <div className="flex justify-between py-4 font-semibold">
          <dt>Order Total</dt>
          <dd>&#8377;{Math.round(total + shipping + tax)}</dd>
        </div>
      </dl>
      <div className={`${hidden? 'hidden' : ""}`}>
        <Link to={`/${to}`}>
          <Button text={`${button}`} onClick={onClick}/>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
