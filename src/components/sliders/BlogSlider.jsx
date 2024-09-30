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
        <SwiperSlide>
          <Blogcard
            img={"/img/blog1.png"}
            Title={"5 Tips and Tricks to Become More Beautiful"}
            Content={"Unlock the secrets to enhancing your natural beauty with our curated collection of five expert tips and tricks. From makeup hacks to skincare secrets, these strategies are designed to help you look and feel your best every day"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blogcard
            img={"/img/blog2.png"}
            Title={"Daily Skincare Routine"}
            Content={
              "Transform your skincare regimen into a daily ritual of self-care and nourishment with our simple yet effective routine. Consisting of essential steps like cleansing, toning, moisturizing, and sun protection, our skincare regimen is tailored to address your skin's unique needs and promote a radiant complexion. "
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blogcard
            img={"/img/blog4.png"}
            Title={"Simple Ways to Treat Your Skin"}
            Content={"Pamper your skin with the care it deserves using our easy and practical methods for skin treatment. From soothing masks to gentle exfoliation techniques, our tips are designed to address common skin concerns and promote overall skin health. "}
          />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  .swiper {
    width: 100%;
    padding: 50px 5px;
    background-color: transparent;
  }
`;
export default BlogSlider;
