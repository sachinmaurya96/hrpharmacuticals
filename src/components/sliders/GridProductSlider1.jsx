import React, { useRef, useState } from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import CardStyle1 from "../productcard/CardStyle1";
const GridProductSlider = () => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide><CardStyle1 img={"/img/product1.png"}/></SwiperSlide>
        <SwiperSlide><CardStyle1 img={"/img/product2.png"}/></SwiperSlide>
        <SwiperSlide><CardStyle1 img={"/img/product5.jpg"}/></SwiperSlide>
        <SwiperSlide><CardStyle1 img={"/img/product4.png"}/></SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
width: 100%;

.swiper{
    width: 100%;
    
}
`;
export default GridProductSlider;