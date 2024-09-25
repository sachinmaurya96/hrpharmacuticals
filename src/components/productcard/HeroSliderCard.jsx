import React, { useState } from "react";
import styled from "styled-components";
import ButtonStyle2 from "../Buttons/ButtonStyle2";
import ButtonOutline from "../Buttons/ButtonOutline";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const HeroSliderCard = ({subtitle,title,desc,img,bgimg}) => {
  const [bg,setBg] = useState(`linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${bgimg}) ||linear-gradient(to right, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("/img/productbg2.png")`)

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of data-aos as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by data-aos-* attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  return (
    <Card style={{backgroundColor:'black'}}>
      <div className="container">
        <div className="content">
          <div className="subTitle"  data-aos="flip-down">{subtitle || "Fungipurge Dusting Powder"}</div>
          <div className="title"  data-aos="flip-down">{title || "Fungipurge Dusting Powder"}</div>
          <div className="desc">{desc || "A powder aimed at treating fungal and bacterial skin infection by absorbing excess moisture and preventing further growth."}</div>
          <div className="buttons">
            <ButtonStyle2>Shop now</ButtonStyle2>
            <ButtonOutline>view details</ButtonOutline>
          </div>
        </div>
        <div className="image">
          <img src={img || "/img/productpng2.png"} alt="" />
        </div>
      </div>
    </Card>
  );
};
const Card = styled.div`
 width: 100%;
height: 500px;
background-size: cover;
background-repeat: no-repeat;
display: flex;
    align-items: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    max-width: 600px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
  .desc{
    // color: #fff;
    color:#EDC967;
    text-align: start;

  }
  .title{
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    text-align: left;
  }
  .subTitle{
    font-size: 25px;
    // color: var(--primary-color);
    color:#EDC967;
    font-family: var(--satisfy);
  }
  .buttons{
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .image {
    width: 300px;
    img {
      width: 100%;
      height: auto;
      transition: all 0.3s;
      &:hover{
        transform: scale(1.05);
        transition: all 0.3s;
      }
    }
  }
  @media only screen and (max-width:600px){
    height: 600px;
    align-items: center;
    padding-bottom: 20px;
    .title{
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    text-align: left;
  }
  .subTitle{
    font-size: 20px;
    color: var(--primary-color);
    font-family: var(--satisfy);
  }
  .desc{
    color: #fff;
    text-align: start;
    font-size: 15px;
  }
  }
  @media only screen and (max-width:426px){
    height: 650px;
    .container {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 10px;
  }
  .image{
    width: 150px;
  }
    .title{
      font-size: 20px;
    }
    .subtitle{
      font-size: 18px;
    }
    .desc{
      display: none;
    }
  }
`;
export default HeroSliderCard;