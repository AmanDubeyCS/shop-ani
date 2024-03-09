import React from "react";
import Card from "../Card/Card";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductCrousal = ({title, products}) => {
  return (
    <section className="pt-16">
      <div className="container flex flex-col  py-8 pb-3 rounded-md">
        <div className="">
          <h1 className="text-2xl font-semibold my-8 text-center text-[#FFBADE]">{title}</h1>
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductCrousal;
