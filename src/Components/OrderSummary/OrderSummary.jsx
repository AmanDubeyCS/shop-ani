import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { IconQuestionMark } from '@tabler/icons-react';

const OrderSummary = ({total, tax, shipping = "50", button, to, hidden=false, onClick}) => {

  return (
    <div className="px-8 bg-[#F9FAFB] rounded-xl pb-7">
      <dl className="">
        <div className="flex justify-between py-4 border-b-2">
          <dt>Subtotal</dt>
          <dd>{Math.round(total)}</dd>
        </div>
        <div className="flex justify-between py-4 border-b-2">
          <dt className="flex gap-2 items-center">Shipping <span className="p-1 bg-slate-200 rounded-full cursor-pointer"><IconQuestionMark stroke={2} size={15}/></span></dt>
          <dd>{shipping}</dd>
        </div>
        <div className="flex justify-between py-4 border-b-2">
        <dt className="flex gap-2 items-center">Tax <span className="p-1 bg-slate-200 rounded-full cursor-pointer"><IconQuestionMark stroke={2} size={15}/></span></dt>
          <dd>{tax}</dd>
        </div>
        <div className="flex justify-between py-4 font-semibold">
          <dt>Order Total</dt>
          <dd>{Math.round(Number(total)+Number(shipping)+Number(tax))}</dd>
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
