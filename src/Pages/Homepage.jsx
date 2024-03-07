import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import Card from "../Components/Card/Card";
import { IconArrowBadgeDownFilled } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Homepage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleclick = () => {
    setShowMore((prev) => !prev);
  };
  return (
    
    <section className="pt-8">
      <div className="container rounded-md shadow-[inset_10px_10px_20px_8px_#00000024] relative">
      <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      onSlideChange={showMore? handleclick : ""}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <Hero />
        <div
          className={`${showMore ? "flex" : "hidden"} flex-wrap justify-between gap-5 mt-8`}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <Hero />
        <div
          className={`${showMore ? "flex" : "hidden"} flex-wrap justify-between gap-5 mt-8`}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <Hero />
        <div
          className={`${showMore ? "flex" : "hidden"} flex-wrap justify-between gap-5 mt-8`}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </SwiperSlide>
      
    </Swiper>
    <div
          className={`p-3 items-center rounded-2xl bg-black absolute left-[50%] -bottom-8 z-30 cursor-pointer ${!showMore ? "animate-bounce" : ""}`}
          onClick={handleclick}
        >
          <h1 className="flex gap-2">
            <IconArrowBadgeDownFilled />
            BUY NOW
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
