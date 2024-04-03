import React, { useState } from "react";
import Breadcrums from "../Breadcrums/Breadcrums";
import { IconTruckReturn } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import Reviews from "../Reviews/Reviews";
import ProductCrousal from "../YouMayLike/ProductCrousal";
import { useProductContext } from "../../Context/ProductContext";
import Button from "../Button/Button";
import { CartState } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ProductDiscription from "../ProductDiscription/ProductDiscription";

const ProductDetails = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { list } = useProductContext();
  const data = list
    .map((item) => item)
    .filter((item) => item.Type === product.Type);
  const [image, setImage] = useState(product?.Image?.Front);
  const [visible, setVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

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
    <section>
      <div
        class={`${showAlert ? '': 'hidden'} fixed bottom-0 left-[50%] w-72  bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md`}
        role="alert"
      >
        <div class="flex items-center">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">Product Added To Cart</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" block md:flex md:p-4 bg-white">
          {/* right side image and button section */}
          <div className="w-full md:w-[30%] flex gap-5 flex-col p-3">
            <div className="justify-between">
              <div className="mb-5">
                {" "}
                {/*Primary Image */}
                <img src={image} alt="" />
              </div>
              <div className="w-[25%] flex gap-5">
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
            </div>
          </div>

          {/* Right Side product discription section */}
          <div className="w-full md:px-7 md:w-[70%]">
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
            <p className="text-green-500 pb-2 text-sm px-4 md:px-0">
              Special Price
            </p>
            <div className="text-[28px] font-medium text-black pb-2 px-4 md:px-0">
              {" "}
              {/*Product Price With Discount */}&#8377;
              {Math.round(
                product.Price - (product.Discount / 100) * product.Price
              )}{" "}
              <span className="text-[16px] line-through text-gray-500 mr-3">
                {product.Price}
              </span>
              <span className="text-[16px] text-green-500 ">
                {product.Discount}%
              </span>
            </div>
            <div className="flex justify-between items-center mt-7 mb-4  px-4 md:px-0"> 
            <h1 className="font-medium ">Size </h1>
            <h1 className="text-blue-400 cursor-pointer">See Size Chart</h1>
            </div>
            <div className="grid grid-cols-3 md:flex gap-5 pb-5 px-4 md:px-0">
              {/* Product Sizes */}
              {sizes.map((size, i) => (
                <label
                  key={size}
                  className={`border w-full py-3 text-center cursor-pointer text-lg font-medium ${
                    selectedSize === size ? "bg-[#4F46E5] text-white" : ""
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  <input type="radio" name="size" className="hidden" />
                  {size}
                </label>
              ))}
            </div>
            {cart.some((p) => p.id === product.id) ? (
              <Link to="/cart">
                {" "}
                <div className="w-full flex px-4 my-7">
                  <Button text="Go To Cart" />
                </div>
              </Link>
            ) : (
              <div
                className="w-full flex px-4 my-7"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
              >
                <Button text="Add To Cart" onClick={handleAddToCart}/>
              </div>
            )}

            <div className="flex flex-col gap-2 pb-5">
              {" "}
              {/*Product Available Offers */}
              <h1
                className="font-medium flex justify-between items-center text-base border-y-2 px-4 py-5 md:px-0 "
                onClick={() => setVisible((prev) => !prev)}
              >
                Available Offers{" "}
                <span>
                  <IconChevronRight stroke={1} size={25} />
                </span>
              </h1>
              <div
                className={`${
                  visible ? "block" : "hidden"
                } flex-col px-4 md:px-0`}
              >
                {offers.map((offer, index) => {
                  return (
                    <span className=" py-1 flex text-sm" key={index}>
                      <img
                        src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                        alt="Offers Image"
                        className="w-[18px] h-[18px] mr-2"
                      />
                      <span className="font-medium pr-2">
                        {offer.offerType}
                      </span>{" "}
                      <span className="line-clamp-1">
                        {offer.offerDescription}
                      </span>{" "}
                      <span className="text-blue-500 ml-1 cursor-pointer">
                        T&C
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2 items-center text-gray-500 px-4 md:px-0 text-sm md:text-base my-7">
              <IconTruckReturn size={35} stroke={1} />
              <span>
                This product is eligible for return under our easy 15 day return
                policy. No questions asked.
              </span>
            </div>
            <ProductDiscription product={product} />
          </div>
        </div>
        <Reviews />
      </div>
      <ProductCrousal title="People also buy" data={data} />
    </section>
  );
};

export default ProductDetails;
