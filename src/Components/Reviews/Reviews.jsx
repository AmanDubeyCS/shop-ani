import React from "react";
import { IconStarFilled } from "@tabler/icons-react";

function Reviews() {
  return (
    <div className="mx-auto py-4">
      <div className="lg:flex gap-20 bg-white md:p-8 p-4">
        <div className="lg:w-[40%]">
          <div className="items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div className="text-sm gap-3 flex items-center">
              <div className="flex">
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
              </div>
              Based on 1624 reviews
            </div>
          </div>
          <div className=" items-center mb-6">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="w-[35px] flex justify-between items-center">
                  5 <IconStarFilled size={20} />
                </span>
                <div className="bg-gray-200 w-2/3 h-5 rounded-md">
                  <div
                    className="bg-black h-full rounded-md"
                    style={{ width: "63%" }}
                  ></div>
                </div>
                <span className="w-[10%] text-sm">63%</span>
              </div>
              <div className=" flex items-center justify-between mb-2">
                <span className="w-[35px] flex justify-between items-center">
                  4 <IconStarFilled size={20} />
                </span>
                <div className="bg-gray-200 w-2/3 h-5 rounded-md">
                  <div
                    className="bg-black h-full rounded-md"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <span className="w-[10%] text-sm">10%</span>
              </div>
              <div className=" flex items-center justify-between mb-2">
                <span className="w-[35px] flex justify-between items-center">
                  3 <IconStarFilled size={20} />
                </span>
                <div className="bg-gray-200 w-2/3 h-5 rounded-md">
                  <div
                    className="bg-black h-full rounded-md"
                    style={{ width: "6%" }}
                  ></div>
                </div>
                <span className="w-[10%] text-sm">6%</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-[35px] flex justify-between items-center">
                  2 <IconStarFilled size={20} />
                </span>
                <div className="bg-gray-200 w-2/3 h-5 rounded-md">
                  <div
                    className="bg-black h-full rounded-md"
                    style={{ width: "12%" }}
                  ></div>
                </div>
                <span className="w-[10%] text-sm">12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="w-[35px] flex justify-between items-center">
                  1 <IconStarFilled size={20} />
                </span>
                <div className="bg-gray-200 w-2/3 h-5 rounded-md">
                  <div
                    className="bg-black h-full rounded-md"
                    style={{ width: "9%" }}
                  ></div>
                </div>
                <span className="w-[10%] text-sm">9%</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold">Share your thoughts</p>
              <p className="">
                If you've used this product, share your thoughts with other
                customers
              </p>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Write a review
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[60%] border-t border-gray-300 md:border-none pt-6">
          <div className="py-10 border-b-2">
            <div className="flex items-center mb-4 ">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://vexacore.vercel.app/assets/p1-Dq75Zhyo.jpg"
                  alt="Emily Selman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">Emily Selman</p>
                <p className="flex text-gray-500">
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                </p>
              </div>
            </div>
            <p className=" text-gray-600 mb-4 italic">
              This is the bag of my dreams. I took it on my last vacation and
              was able to fit an absurd amount of snacks for the many long and
              hungry flights.
            </p>
          </div>
          <div className="py-10 border-b-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://vexacore.vercel.app/assets/p1-Dq75Zhyo.jpg"
                  alt="Hector Gibbons"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">Hector Gibbons</p>
                <p className="flex text-gray-500">
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                </p>
              </div>
            </div>
            <p className=" text-gray-600 mb-4 italic">
              Before getting the Ruck Snack, I struggled my whole life with
              pulverized snacks, endless crumbs, and other heartbreaking snack
              catastrophes. Now, I can stow my snacks with confidence and style!
            </p>
          </div>
          <div className="py-10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://vexacore.vercel.app/assets/p1-Dq75Zhyo.jpg"
                  alt="Mark Edwards"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">Mark Edwards</p>
                <p className="flex text-gray-500">
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                </p>
              </div>
            </div>
            <p className=" text-gray-600 italic">
              I love how versatile this bag is. It can hold anything ranging
              from cookies that come in trays to cookies that come in tins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
