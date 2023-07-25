import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
// import Image from "next/image";
const SliderImg = () => {
  return (
    <div className="py-6">
      <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop={true}
          pagination={true}
          className="mySwiper w-[240px] h-[320px] lg:w-[260px] lg:h-[350px] bg-cover "
        >
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img
              className="w-[100%] h-[100%] bg-cover"
              src="https://plus.unsplash.com/premium_photo-1688522732585-9c1021a0a021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg  ">
            <img
              className="w-[100%] h-[100%] "
              src="https://images.unsplash.com/photo-1689464090276-50bed9a6798f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg ">
            <img
              className="w-[100%] h-[100%]"
              src="https://images.unsplash.com/photo-1689499482490-10733da17d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg ">
            <img
              className="w-[100%] h-[100%]"
              src="https://images.unsplash.com/photo-1686668108582-5c7074494753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SliderImg;
