import React from "react";
import Hero from "../Components/Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import b1 from "../Assets/Banner-1.webp";
import b2 from "../Assets/Banner-2.webp";
import b3 from "../Assets/Banner-3.jpg";
import ProductCrousal from "../Components/YouMayLike/ProductCrousal";
import HotAnime from "../Components/HotAnime/HotAnime";

const Homepage = ({ data }) => {
  const latestDrop = data
    .map((item) => item)
    .filter((item) => item.Discount > 40);
  const tShirt = data
    .map((item) => item)
    .filter((item) => item.Type === "T-shirt");

  return (
    <section className="pt-8">
      <div className="container rounded-md shadow-[inset_10px_10px_20px_8px_#00000024] relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation
        >
          <SwiperSlide>
            <Hero img={b1} />
          </SwiperSlide>
          <SwiperSlide>
            <Hero img={b2} />
          </SwiperSlide>
          <SwiperSlide>
            <Hero img={b3} />
          </SwiperSlide>
        </Swiper>
      </div>

      <ProductCrousal title="Latest Drop" data={latestDrop} />
      <HotAnime />
      <ProductCrousal title="Today's pick" data={data} />
      <ProductCrousal title="Best Of T-shirts" data={tShirt} />
    </section>
  );
};

export default Homepage;
