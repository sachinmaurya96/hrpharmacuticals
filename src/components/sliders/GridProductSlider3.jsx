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
import ButtonStyle1 from "../Buttons/ButtonStyle1";
import CardStyle2 from "../productcard/CardStyle2";
const GridProductSlider3 = () => {
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
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
      
        <SwiperSlide><CardStyle2 img={"/img/product8.jpg"}/></SwiperSlide>
        <SwiperSlide><CardStyle2 img={"/img/product10.jpg"}/></SwiperSlide>
        <SwiperSlide><CardStyle2 img={"/img/product12.jpg"}/></SwiperSlide>
        <SwiperSlide className="default-card">
            <div className="card">
                <div className="subtitle">Hairloss Treatment</div>
                <div className="title">Professional</div>
                <div className="subtitle2">Hailcare</div>
                <p>Unleash the Power Within Your Tresses".Your Journey to Hair Perfection Starts Here</p>
                <div className="btn">
                    <ButtonStyle1>continue shopping</ButtonStyle1>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
width: 100%;
.swiper{
    width: 100%;
}
.card{
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    .subtitle{
        color: var(--primary-color);
        font-family: "Satisfy", cursive;
        font-size: 25px;
    }
    .title{
        font-weight: 600;
        font-size: 35px;
        text-transform: uppercase;
        color: #333;
    }
    .subtitle2{
        font-size: 30px;
        color: #333;
        font-weight: 400;
        text-transform: uppercase;
       
    }
    p{
            color: var(--text-color);
            line-height: 25px;
        }
}
@media only screen and (max-width: 600px){
.card{
  display: none;
}
.default-card{
  display: none;
}
}
`;
export default GridProductSlider3;
