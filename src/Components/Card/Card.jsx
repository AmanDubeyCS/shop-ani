import React, { useState } from "react";
import im from "../../Assets/primary1.jpg";

const Card = () => {

  return (
    <>
      <div
        className="w-[300px] h-[500px] bg-white bg-transparent overflow-hidden transition-all duration-200 ease-in-out hover:scale-105 hover:border"
      >
        <div className="h-[400px] overflow-hidden">
          <img src={im} alt="" className="h-full "/>
        </div>
        <div className="flex flex-col gap-2 px-3 py-3">
          <div className="text-[12px] text-gray-500 font-medium text-start">T-shirt</div>
          <div className="text-[14px] font-medium text-black line-clamp-1">
            Gojo T-shirt (half-sleev)
          </div>
          <div className="text-[14px] font-medium text-black">
            ₹229{" "}
            <span className="text-[12px] line-through text-gray-500 mr-3">
              800
            </span>
            <span className="text-[14px] text-green-500 ">30%</span>
          </div>
          {/* <div className='text-[14px] text-black'><span className='text-[14px] text-gray-500 mr-3'>Size</span>S, M, L, XL</div> */}
        </div>
        {/* <div
        className={`w-[215px] text-black bg-[#FFBADE] text-center py-1 font-semibold text-lg cursor-pointer`}
      >
        Add To Cart
      </div> */}
      </div>
    </>
  );
};

export default Card;
// }
