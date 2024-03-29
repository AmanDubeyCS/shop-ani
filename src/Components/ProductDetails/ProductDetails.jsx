import React, { useState } from "react";
import Breadcrums from "../Breadcrums/Breadcrums";
import { IconTruckReturn } from "@tabler/icons-react";
import { IconChevronRight } from '@tabler/icons-react';
import { IconShoppingCart } from "@tabler/icons-react";
import { IconCornerDownRightDouble } from "@tabler/icons-react";

const ProductDetails = ({ product }) => {
  const [image, setImage] = useState(product?.Image?.Front);
  const [visible, setVisible] = useState(false)

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
    <div className="container block md:flex md:p-4 bg-white">
      {/* right side image and button section */}
      <div className="w-full md:w-[40%] flex gap-5 flex-col">
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
        <div className="fixed bottom-0 left-0 gap-0 w-full md:relative flex md:gap-2 justify-between">
          {" "}
          {/*Buttons ADD TO CART and BUY NOW */}
          <button className="CartBtn w-[50%] h-12 bg-red-300 flex items-center justify-center cursor-pointer duration-[0.5s] overflow-hidden shadow-[0px_5px_10px_rgba(0,0,0,0.103)] relative md:rounded-xl border-[none] md:active:duration-[0.5s] md:active:scale-95">
            <span className="IconContainer absolute left-[-50px] w-[30px] h-[30px] bg-transparent flex items-center justify-center overflow-hidden z-[2] duration-[0.5s] rounded-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="rgb(17, 17, 17)"
                className="cart"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </span>
            <p className="text h-full w-fit flex items-center justify-center text-black z-[1] duration-[0.5s] text-[1.04em] font-semibold">
              Add to Cart
            </p>
          </button>
          <button className="CartBtn w-[50%] h-12 bg-red-400 flex items-center justify-center cursor-pointer duration-[0.5s] overflow-hidden shadow-[0px_5px_10px_rgba(0,0,0,0.103)] relative md:rounded-xl border-[none] md:active:duration-[0.5s] md:active:scale-95">
            <span className="IconContainer absolute left-[-50px] w-[28px] h-[28px] bg-transparent flex items-center justify-center overflow-hidden z-[2] duration-[0.5s] rounded-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 125"
                enableBackground="new 0 0 100 100"
                xmlSpace="preserve"
              >
                <polygon
                  fill="#000000"
                  points="80.562,41.754 52.861,41.754 67.299,0 19.437,58.247 47.14,58.247 32.702,100 "
                />
              </svg>
            </span>
            <p className="text h-full w-fit flex items-center justify-center text-black z-[1] duration-[0.5s] text-[1.04em] font-semibold">
              BUY NOW
            </p>
          </button>
          {/* <div className="flex w-[49%] gap-1 bg-[#ff9f00] text-lg justify-center items-center px-5 py-3 rounded-sm font-medium text-white cursor-pointer">
            <IconShoppingCart size={25} stroke={2} />
            ADD TO CART
          </div>
          <div className="flex w-[49%] gap-1 bg-[#fb641b] text-lg justify-center items-center  px-5 py-3 rounded-sm font-medium text-white cursor-pointer">
            <IconCornerDownRightDouble size={25} stroke={2} />
            BUY NOW
          </div> */}
        </div>
      </div>

      {/* Right Side product discription section */}
      <div className="w-full md:px-7 md:w-[60%]">
        <div className="hidden md:flex">
        <Breadcrums product={product} /> {/*BreadCrums */}
        </div>
        <div className="px-4 md:px-0">
          <h1 className="text-base text-gray-500 font-medium mb-2">
            {" "}
            {/*Product Type Info */}
            {product.Type}
          </h1>
          <h1 className="text-[18px] leading-6 pb-2">{product.Name}</h1>{" "}
          {/*Product Name Info */}
        </div>
        <p className="text-green-500 pb-2 text-sm px-4 md:px-0">Special Price</p>
        <div className="text-[28px] font-medium text-black pb-2 px-4 md:px-0">
          {" "}
          {/*Product Price With Discount */}₹
          {Math.round(product.Price - (product.Discount / 100) * product.Price)}{" "}
          <span className="text-[16px] line-through text-gray-500 mr-3">
            {product.Price}
          </span>
          <span className="text-[16px] text-green-500 ">
            {product.Discount}%
          </span>
        </div>
        <div className="flex gap-4 pb-5 px-4 md:px-0">
          {" "}
          {/*Product Sizes */}
          <h1 className="font-medium text-sm text-gray-500 mr-8">Size</h1>
          {sizes.map((size) => {
            return (
              <span className="border w-9 text-center cursor-pointer " key={size}>
                {size}
              </span>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 pb-5">
          {" "}
          {/*Product Available Offers */}
          <h1 className="font-medium flex justify-between items-center text-base border-y-2 px-4 py-3 md:px-0" onClick={() => setVisible((prev) => !prev)}>Available Offers  <span><IconChevronRight stroke={1} size={25} /></span></h1>
         
          <div className={`${ visible ? "block" : "hidden"} flex-col px-4 md:px-0`}>
            {offers.map((offer, index) => {
              return (
                <span className=" py-1 flex text-sm" key={index}>
                  <img
                    src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    alt="Offers Image"
                    className="w-[18px] h-[18px] mr-2"
                  />
                  <span className="font-medium pr-2">{offer.offerType}</span>{" "}
                  <span className="line-clamp-1">{offer.offerDescription}</span>{" "}
                  <span className="text-blue-500 ml-1 cursor-pointer">T&C</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex gap-2 items-center text-gray-500 px-4 md:px-0 text-xs md:text-base">
          <IconTruckReturn size={35} stroke={1} />
          <p>
            This product is eligible for return under our easy 15 day return
            policy. No questions asked.
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-4 border-y-4 px-4 md:px-0">
          <h1 className="font-medium text-base ">Product Information</h1>
          <table>
            <tbody>
              <tr className="">
                <td>TYPE</td>
                <td>Round Neck</td>
              </tr>
              <tr className="">
                <td>SLEEVE</td>
                <td>{product.Sleeve}</td>
              </tr>
              <tr className="">
                <td>FABRIC</td>
                <td>{product.Fabric}</td>
              </tr>
              <tr className="">
                <td>FIT</td>
                <td>Regular Fit</td>
              </tr>
              <tr className="">
                <td>PACK OF</td>
                <td> 1</td>
              </tr>
              <tr className="">
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
