import React from "react";
import { Link } from "react-router-dom";
import { IconStarFilled } from "@tabler/icons-react";
import { IconStar } from '@tabler/icons-react';

const Card = ({ list }) => {
  const rand = Math.floor(Math.random() * 1500 + 1);
  const randStar = Math.floor(Math.random() * 5 + 1);
  return (
    <>
      <Link to={`/product/${list.id}`}>
        <div className=" bg-white bg-transparent overflow-hidden ">
          <div className="overflow-hidden w-full h-full transition-all duration-200 ease-in-out hover:opacity-75">
            <img
              src={list?.Image?.Front}
              alt="product image"
              className="max-w-full h-full"
            />
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
            <div className="flex items-center">
              {Array(5)
                .fill(true)
                .map((item, index) => (
                  randStar>= index ? <IconStarFilled size={15} key={index}/> : <IconStar stroke={2} size={15} key={index}/>
                ))}
              <span className="text-sm ml-1 flex text-gray-500">({rand}) </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
// }
