import React, { useRef, useState } from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import Blogcard from "../productcard/Blogcard";
const BlogSlider = () => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        
        modules={[Navigation]}
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide><Blogcard img={"/img/blog1.png"}/></SwiperSlide>
        <SwiperSlide><Blogcard img={"/img/blog2.png"}/></SwiperSlide>
        <SwiperSlide><Blogcard img={"/img/blog4.png"}/></SwiperSlide>
        <SwiperSlide><Blogcard img={"/img/blog3.png"}/></SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
width: 100%;
.swiper{
    width: 100%;
    padding: 50px 5px;
    background-color: transparent;
}
`;
export default BlogSlider;
