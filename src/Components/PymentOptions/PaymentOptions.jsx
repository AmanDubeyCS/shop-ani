import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";

function PaymentOptions() {
  const [paymentOption, setPaymentOption] = useState("UPI");

  const handlePayment = (e) => {
    setPaymentOption(e.target.value);
  };
  return (
    <div>
      <ul>
        <li className="p-5 border-b-2">
          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={paymentOption === "UPI"}
              onChange={handlePayment}
            />
            <sapn className="ml-5 text-base font-semibold">UPI</sapn>
          </label>
          <div className={`p-5 ${paymentOption == "UPI" ? "" : "hidden"}`}>
            <TextInput placeholder="Enter UPI ID" />
          </div>
        </li>
        <li className="p-5 border-b-2">
          <label>
            <input
              type="radio"
              name="payment"
              value="Card"
              checked={paymentOption === "Card"}
              onChange={handlePayment}
            />
            <sapn className="ml-5 text-base font-semibold">
              Credit / Debit / ATM Card
            </sapn>
          </label>
          <div className={`p-5 ${paymentOption == "Card" ? "" : "hidden"}`}>
            <TextInput placeholder="Card number" />
            <TextInput placeholder="Name on card" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <TextInput placeholder="Expiration date (MM/YY)" />
              <TextInput placeholder="CVC" />
            </div>
          </div>
        </li>
        <li className="p-5 border-b-2">
          <label>
            <input
              type="radio"
              name="payment"
              value="Net Banking"
              checked={paymentOption === "Net Banking"}
              onChange={handlePayment}
            />
            <sapn className="ml-5 text-base font-semibold">Net Banking</sapn>
          </label>
        </li>
        <li className="p-5 border-b-2">
          <label>
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={paymentOption === "COD"}
              onChange={handlePayment}
            />
            <sapn className="ml-5 text-base font-semibold">
              Cash on Delivery
            </sapn>
          </label>
        </li>
        <li className="p-5">
          <label>
            <input
              type="radio"
              name="payment"
              value="EMI"
              checked={paymentOption === "EMI"}
              onChange={handlePayment}
            />
            <sapn className="ml-5 text-base font-semibold">
              EMI (Easy Installments)
            </sapn>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default PaymentOptions;
