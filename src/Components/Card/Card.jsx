import React, { useState } from "react";
import im from "../../Assets/primary1.jpg";
import { Link } from "react-router-dom";

const Card = ({ list }) => {
  return (
    <>
    <Link to={`/product/${list.id}`}>
    <div className=" bg-white bg-transparent overflow-hidden "  >
            <div className="overflow-hidden h-full transition-all duration-200 ease-in-out hover:opacity-75">
              <img src={list?.Image?.Front} alt="" className="h-full " />
            </div>
            <div className="flex flex-col gap-2 px-3 py-3">
              <div className="text-[12px] text-gray-500 font-medium text-start">
                {list.Type}
              </div>
              <div className="text-[14px] font-medium text-black line-clamp-1">
                {list.Name}
              </div>
              <div className="text-[14px] font-medium text-black">
                {Math.round(list.Price - (list.Discount / 100) * list.Price)}{" "}
                <span className="text-[12px] line-through text-gray-500 mr-3">
                  {list.Price}
                </span>
                <span className="text-[14px] text-green-500 ">
                  {list.Discount}%
                </span>
              </div>
              {/* <div className='text-[14px] text-black'><span className='text-[14px] text-gray-500 mr-3'>Size</span>S, M, L, XL</div> */}
            </div>
            {/* <div
        className={`w-[215px] text-black bg-[#FFBADE] text-center py-1 font-semibold text-lg cursor-pointer`}
      >
        Add To Cart
      </div> */}
          </div>
    </Link>
          
    </>
  );
};

export default Card;
// }
