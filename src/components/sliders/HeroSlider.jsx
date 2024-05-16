import React, { useRef, useState } from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import HeroSliderCard from "../productcard/HeroSliderCard";
const HeroSlider = () => {
  return (
    <Wrapper>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
         <SwiperSlide>
          <HeroSliderCard bgimg={"/img/productbg2.png"} img={"/img/product9png.png"}/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCard bgimg={"/img/productbg3.png"}  img={"/img/product5png.png"} desc={"Quick Relief from Back Pain, Neck/Shoulder Pain, Sprain, Joint Pain"} title={"Volini Activ Pain Relief "} subtitle={"Volini Activ"}/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCard bgimg={"/img/productbg4.png"} img={"/img/product10png.png"} desc={"Ortho Care - Pain Relief Gel Ortho Care Pain Relief Gel is made from various analgesic herbs,"} title={"Orthocare gel pain relief"} subtitle={"Orthocare gel"}/>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 100%;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card {
    width: 100%;
  }
`;
export default HeroSlider;
