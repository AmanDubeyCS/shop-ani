import React from "react";
import img1 from "../../Assets/primary1.jpg";

const HotAnime = () => {
  return (
    <section>
      <div className="container flex flex-col px-5 py-8 pb-3 rounded-md">
        <div className="">
          <h1 className="text-2xl font-semibold my-8 border-b-2">
            Hot Anime Picks
          </h1>
        </div>

        <div class="container-grid">

          <div class="first relative">
            <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
            <img
              src="https://i.ibb.co/RyGKHpF/naruto-image.jpg"
              alt=""
              className="w-full h-full cursor-pointer"
            />
            <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
              Naruto
            </p>
          </div>

          <div class="second">
            <div class="top-left relative">
              <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
              <img
                src="https://i.ibb.co/4PGhFrG/Onepice.jpg"
                alt=""
                className="w-full h-full hover:opacity-70"
              />
              <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                One Pice
              </p>
            </div>
            <div class="top-right relative">
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
            <div class="bottom-left relative">
              <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
              <img
                src="https://i.ibb.co/tJwjNZp/tanjiro-kamado-and-hinokami-kagura-hd-demon-slayer-kimetsu-no-yaiba.jpg"
                alt=""
                className="w-full h-full hover:opacity-70 cursor-pointer"
              />
              <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                Demon Slayer
              </p>
            </div>
            <div class="bottom-right relative">
              <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
              <img
                src="https://i.ibb.co/sqShnrq/cainsaw.jpg"
                alt=""
                className="w-full h-full hover:opacity-70 cursor-pointer"
              />
              <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
                Chainsaw Man
              </p>
            </div>
          </div>

          <div class="third relative">
            <div className="bg-[rgba(0,0,0,0.3)] h-full absolute left-0 top-0 w-full"></div>
            <img
              src="https://i.ibb.co/Z2RFKsW/dragon-ball.png"
              alt=""
              className="w-full h-full hover:opacity-70 cursor-pointer object-cover"
            />
            <p className="absolute bottom-[2%] left-[5%] font-semibold md:text-2xl lg:text-4xl text-white">
              Dragon Ball
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotAnime;
