import React from "react";
import img1 from "../../Assets/primary1.jpg";
import { Link } from "react-router-dom";

const HotAnime = () => {
  return (
    <section className="mt-6">
      <div className="container flex flex-col px-5  pb-3 rounded-md bg-white">
        <div className="">
          <h1 className="text-2xl font-semibold my-8 border-b-2">
            Hot Anime Picks
          </h1>
        </div>

        <div className="container-grid">
          <div className="first relative">
            <Link to={"/category/Naruto"}>
              <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
              <img
                src="https://i.ibb.co/RyGKHpF/naruto-image.jpg"
                alt=""
                className="w-full h-full cursor-pointer"
              />
              <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                Naruto
              </p>
            </Link>
          </div>

          <div className="second">
            <div className="top-left relative">
              <Link to={"/category/One Pice"}>
                <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
                <img
                  src="https://i.ibb.co/4PGhFrG/Onepice.jpg"
                  alt=""
                  className="w-full h-full hover:opacity-70"
                />
                <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                  One Pice
                </p>
              </Link>
            </div>

            <div className="top-right relative">
              <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
              <img
                src="https://i.ibb.co/p479mk3/sung-jin-woo-blue-background-hd-solo-leveling.jpg"
                alt=""
                className="w-full h-full hover:opacity-70 cursor-pointer"
              />
              <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                Solo Leveling
              </p>
            </div>
            <div className="bottom-left relative">
              <Link to={"/category/Demon Slayer"}>
                <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
                <img
                  src="https://i.ibb.co/tJwjNZp/tanjiro-kamado-and-hinokami-kagura-hd-demon-slayer-kimetsu-no-yaiba.jpg"
                  alt=""
                  className="w-full h-full hover:opacity-70 cursor-pointer"
                />
                <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                  Demon Slayer
                </p>
              </Link>
            </div>
            <div className="bottom-right relative">
              <Link to={"/category/Chainsaw man"}>
                <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
                <img
                  src="https://i.ibb.co/sqShnrq/cainsaw.jpg"
                  alt=""
                  className="w-full h-full hover:opacity-70 cursor-pointer"
                />
                <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                  Chainsaw Man
                </p>
              </Link>
            </div>
          </div>

          <div className="third relative">
            <Link to={"/category/Dragon Ball"}>
              <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
              <img
                src="https://i.ibb.co/Z2RFKsW/dragon-ball.png"
                alt=""
                className="w-full h-full hover:opacity-70 cursor-pointer object-cover"
              />
              <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                Dragon Ball
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotAnime;
