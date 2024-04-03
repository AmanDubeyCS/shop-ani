import React from "react";
import TextInput from "../TextInput/TextInput";

const AddressForm = () => {
  return (
    <div className="pb-8">
      <h2 className="text-lg font-semibold pb-2">Shipping information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        <TextInput type="text" placeholder="First name" required/>
        <TextInput type="text" placeholder="Last name" required/>
      </div>
      <TextInput type="text" placeholder="Company" />
      <TextInput type="text" placeholder="Address" required/>
      <TextInput type="text" placeholder="Apartment, suite, etc." required/>
      <div className="grid grid-cols-2 gap-4">
        <TextInput type="text" placeholder="City" required/>
        <select className="border border-solid border-gray-300 rounded-lg outline-none mb-3 py-2 px-3">
          <option value="united-states">United States</option>
          <option value="canada">Canada</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TextInput type="text" placeholder="State / Province" required/>
        <TextInput type="text" placeholder="Postal code" required/>
      </div>
      <TextInput type="tel" placeholder="Phone" required/>
    </div>
  );
};

export default AddressForm;
