import React, { useState } from "react";
import im from "../../Assets/primary1.jpg";

const Card = () => {
  const [cartShow, setCartShow] = useState(false);

  const handleclick = () => {
    setCartShow((prev) => !prev);
  };

  return (
    <>
      <div
        className="w-[215px] bg-white bg-transparent overflow-hidden"
        onMouseEnter={() => setCartShow(true)}
        onMouseLeave={() => setCartShow(false)}
      >
        <div className="h-[250px]">
          <img src={im} alt="" className="h-full" />
        </div>
        <div className="flex flex-col gap-2 px-3">
          {/* <div className="text-[12px] text-gray-500 font-medium text-start">Jujutsu Kisen</div> */}
          <div className="text-[14px] font-medium text-black line-clamp-1">
            Gojo T-shirt (half-sleev)
          </div>
          <div className="text-base font-medium text-black">
            ₹229{" "}
            <span className="text-[14px] line-through text-gray-500 mr-3">
              800
            </span>
            <span className="text-[13px] text-green-500 ">30%</span>
          </div>
          {/* <div className='text-[14px] text-black'><span className='text-[14px] text-gray-500 mr-3'>Size</span>S, M, L, XL</div> */}
        </div>
      </div>
      <div
        className={`${cartShow ? 'flex' : "hidden" } absolute w-[215px] text-black bg-[#FFBADE]  text-center py-2 font-semibold text-lg cursor-pointer`}
      >
        Add To Cart
      </div>
    </>
  );
};

export default Card;
// }
