import React from "react";

const Button = ({text}) => {
  return (
    <button className=" w-full h-12 bg-[#4F46E5] flex items-center justify-center cursor-pointer duration-[0.5s] overflow-hidden shadow-[0px_5px_10px_rgba(0,0,0,0.103)] relative rounded-xl border-[none] md:active:duration-[0.5s] md:active:scale-95">
      <p className="text h-full w-fit flex items-center justify-center text-white z-[1] duration-[0.5s] text-[1.04em] font-semibold">
        {text}
      </p>
    </button>
  );
};

export default Button;
