import React, { useState } from "react";
import Breadcrums from "../Breadcrums/Breadcrums";
import { IconTruckReturn } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconCornerDownRightDouble } from "@tabler/icons-react";

const ProductDetails = ({ product }) => {
  const [image, setImage] = useState(product?.Image?.Front);

  const handleImageChange = (e) => {
    setImage(e.target.src);
  };
  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
  const offers = [
    {
      offerType: "Bank Offer",
      offerDescription: "Get ₹25* instant discount for the 1st Order using UPI",
    },
    {
      offerType: "Bank Offer",
      offerDescription:
        "10% Instant Discount on BOBCARD Transactions, up to ₹500 on orders of ₹5,000 and above",
    },
    {
      offerType: "Bank Offer",
      offerDescription:
        "10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and above",
    },
    {
      offerType: "Combo Offer",
      offerDescription: "Buy 2 or more items save ₹80",
    },
  ];

  return (
    <div className="container flex mt-4">
      {/* right side image and button section */}
      <div className="w-[40%] flex gap-5 flex-col">
        <div className="flex flex-row justify-between">
          <div className="w-[15%] flex flex-col gap-2">
            {" "}
            {/* All Images list */}
            <img
              onMouseOver={handleImageChange}
              src={product?.Image?.Front}
              alt="product"
            />
            {product?.Image?.Back != " " && (
              <img
                onMouseOver={handleImageChange}
                src={product?.Image?.Back}
                alt="product"
              />
            )}
            {product?.Image?.Side != " " && (
              <img
                onMouseOver={handleImageChange}
                src={product?.Image?.Side}
                alt="product"
              />
            )}
            {product?.Image?.Other != " " && (
              <img
                onMouseOver={handleImageChange}
                src={product?.Image?.Other}
                alt="product"
              />
            )}
          </div>
          <div className="w-[84%]">
            {" "}
            {/*Primary Image */}
            <img src={image} alt="" />
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          {" "}
          {/*Buttons ADD TO CART and BUY NOW */}
          <div className="flex w-[49%] gap-1 bg-[#ff9f00] text-lg justify-center items-center px-5 py-3 rounded-sm font-medium text-white cursor-pointer">
            <IconShoppingCart size={25} stroke={2} />
            ADD TO CART
          </div>
          <div className="flex w-[49%] gap-1 bg-[#fb641b] text-lg justify-center items-center  px-5 py-3 rounded-sm font-medium text-white cursor-pointer">
            <IconCornerDownRightDouble size={25} stroke={2} />
            BUY NOW
          </div>
        </div>
      </div>

      {/* Right Side product discription section */}
      <div className="details px-7 w-[60%]">
        <Breadcrums product={product} /> {/*BreadCrums */}
        <div>
          <h1 className="text-base text-gray-500 font-medium mb-2"> {/*Product Type Info */}
            {product.Type}
          </h1>
          <h1 className="text-[18px] leading-6 pb-2">{product.Name}</h1> {/*Product Name Info */}
        </div>

        <p className="text-green-500 pb-2 text-sm">Special Price</p>

        <div className="text-[28px] font-medium text-black pb-2"> {/*Product Price With Discount */}
          ₹
          {Math.round(product.Price - (product.Discount / 100) * product.Price)}{" "}
          <span className="text-[16px] line-through text-gray-500 mr-3">
            {product.Price}
          </span>
          <span className="text-[16px] text-green-500 ">
            {product.Discount}%
          </span>
        </div>

        <div className="flex gap-4 pb-5"> {/*Product Sizes */}
          <h1 className="font-medium text-sm text-gray-500 mr-8">Size</h1>
          {sizes.map((size) => {
            return (
              <span className="border px-4 py-2 cursor-pointer " key={size}>
                {size}
              </span>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 pb-5"> {/*Product Available Offers */}
          <h1 className="font-medium text-base">Available Offers</h1>
          <div>
            {offers.map((offer, index) => {
              return (
                <span className=" py-1 flex text-sm" key={index}>
                  <img
                    src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    alt="Offers Image"
                    className="w-[18px] h-[18px] mr-2"
                  />
                  <span className="font-medium pr-2">{offer.offerType}</span>{" "}
                  {offer.offerDescription}{" "}
                  <span className="text-blue-500 ml-1 cursor-pointer">T&C</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2 items-center text-gray-500">
          <IconTruckReturn size={35} stroke={1} />
          <p>
            This product is eligible for return under our easy 15 day return
            policy. No questions asked.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <h1 className="font-medium text-base">Product Information</h1>
          <table>
            <tbody>
              <tr className="border-t-2 border-b-2">
                <td>TYPE</td>
                <td>Round Neck</td>
              </tr>
              <tr className="border-t-2 border-b-2">
                <td>SLEEVE</td>
                <td>{product.Sleeve}</td>
              </tr>
              <tr className="border-t-2 border-b-2">
                <td>FABRIC</td>
                <td>{product.Fabric}</td>
              </tr>
              <tr className="border-t-2 border-b-2">
                <td>FIT</td>
                <td>Regular Fit</td>
              </tr>
              <tr className="border-t-2 border-b-2">
                <td>PACK OF</td>
                <td> 1</td>
              </tr>
              <tr className="border-t-2 border-b-2">
                <td>PATTERN</td>
                <td>{product.Pattern}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
