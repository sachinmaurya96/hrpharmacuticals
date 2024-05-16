import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import CardStyle1 from "../components/productcard/CardStyle1";
import styled from "styled-components";
import CardStyle2 from "../components/productcard/CardStyle2";
import CardStyle3 from "../components/productcard/CardStyle3";
import CardStyle4 from "../components/productcard/CardStyle4";
import Blogcard from "../components/productcard/Blogcard";
import Footer from "../components/Footer";
import GridProductSlider from "../components/sliders/GridProductSlider1";
import GridProductSlider2 from "../components/sliders/GridProductSlider2";
import GridProductSlider3 from "../components/sliders/GridProductSlider3";
import ButtonStyle1 from "../components/Buttons/ButtonStyle1";
import ButtonStyle2 from "../components/Buttons/ButtonStyle2";
import ButtonOutline from "../components/Buttons/ButtonOutline";
import HeroSliderCard from "../components/productcard/HeroSliderCard";
import BlogSlider from "../components/sliders/BlogSlider";

const HomePage = () => {
  return (
    <Wrapper>
      <HeroSlider />

      <div className="container">
        <GridProductSlider />
      </div>
      <div className="container">
        <GridProductSlider2 />
      </div>
      <hr />
      <div className="container">
        <GridProductSlider3 />
      </div>
      <div className="discover">
        <div className="container">
          <div className="image">
            <img src="/img/model.png" alt="" />
          </div>
          <div className="content">
            <div className="title">
            Discover a beautiful you
            </div>
            <div className="subtitle">
            with our new <span>Skin Essentials</span>
            </div>
            <p>Unlock Your Beauty Potential: Discover a Beautiful You with Our New Skin Essentials – Rejuvenate, Nourish, and Embrace Your Natural Glow</p>
            <div className="product-grid">
              <div className="card">
                <div className="icon"></div>
                <div className="tile">Lasting Formulas</div>
              </div>
              <div className="card">
                <div className="icon"></div>
                <div className="tile">Face skin Protection</div>
              </div>
              <div className="card">
                <div className="icon"></div>
                <div className="tile">Eye care Product</div>
              </div>
            </div>
            <div className="buttons">
              <ButtonStyle2>shop now</ButtonStyle2>
              <ButtonOutline>read more</ButtonOutline>
            </div>
          </div>
        </div>
      </div>
      <div className="discover2">
        <div className="container">
          <div className="content">
            <div className="title">Enjoy the best quality,</div>
            <div className="subtitle">
            made by <span>Sanstuti</span><br /> <span>Pharmaceuticals</span> @15% <br /> Discount

            </div>
            <p>Sanstuti Pharmaceuticals, crafting excellence with care, Experience the finest quality, beyond compare.</p>
            <p><strong>Elevate your well-being with products that never change</strong></p>
            <div className="counter">
                <div>
                  <span className="number">00</span>
                  <span className="time">Days</span>
                </div>
                <div>
                  <span className="number">00</span>
                  <span className="time">Days</span>
                </div>
                <div>
                  <span className="number">00</span>
                  <span className="time">Days</span>
                </div>
                <div>
                  <span className="number">00</span>
                  <span className="time">Days</span>
                </div>
            </div>
            <div className="buttons">
              <ButtonStyle2>shop now</ButtonStyle2>
              <ButtonOutline>read more</ButtonOutline>
            </div>
          </div>
          <div className="image">
            <img src="/img/model2.png" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="products_journey">
        <div className="container">
         <div className="content">
         <div className="subtitle">Product's Journey</div>
          <div className="title">100% Rigorously tested and Doctor-certified.</div>
          <p>Majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
         </div>
         
         <div className="grid">
          <CardStyle4 img={"/img/doc1.png"} num={"1."}/>
          <CardStyle4 img={"/img/doc2.png"} num={"2."}/>
          <CardStyle4 img={"/img/doc3.png"} num={"3."}/>
         </div>
        </div>
      </div>
      <hr />
      <div className="blogs">
        <div className="container">
        <div className="content">
         <div className="subtitle">Product's Journey</div>
          <div className="title">100% Rigorously tested and Doctor-certified.</div>
          <p>Majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
         </div>
         <div className="blog_slider">
          <BlogSlider/>
         </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-top: 65px;
  .cards {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .cards2 {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  hr {
    border: none;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .discover{
    background-color: rgba(0, 0, 0, 0.1);
    .container{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 50px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      padding: 50px 0;
      .title{
        font-size: 40px;
        font-weight: 600;
      }
      .subtitle{
        font-size: 40px;
        font-weight: 300;
        span{
          color: var(--primary-color);
          font-weight: 400;
          font-family: "Satisfy", cursive;
        }
      }
      p{
        color: var(--text-color);
      }
    }
    .buttons{
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .product-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      font-weight: 600;
    }
  }
  .discover2{
    .container{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 50px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      text-align: center;
      padding: 50px 0;
      .title{
        font-size: 40px;
        font-weight: 600;
      }
      .subtitle{
        font-size: 40px;
        font-weight: 300;
        
        span{
          color: var(--primary-color);
          font-weight: 400;
          font-family: "Satisfy", cursive;
        }
      }
      p{
        color: var(--text-color);
        text-align: center;
      }
    }
    .counter{
      display: flex;
      gap: 5px;
      div{
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        .number{
         
          font-size: 25px;
        }
        .time{
          font-weight: 300;
          color: var(--text-color);
        }
      }
    }
    .buttons{
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .products_journey{
    .container{
      display: flex;
      flex-direction: column;
      gap: 50px;
     align-items: center;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      text-align: center;
      max-width: 700px;
      min-width: 300px ;
      .title{
        font-size: 30px;
        font-weight: 600;
      }
      .subtitle{
        font-size: 25px;
        color: var(--primary-color);
          font-weight: 400;
          font-family: "Satisfy", cursive;
        
      }
      p{
        color: var(--text-color);
        text-align: center;
      }
    }
    .grid{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 50px;
    }
  }
  .blogs{
    .container{
      display: flex;
      flex-direction: column;
      gap: 50px;
     align-items: center;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      text-align: center;
      max-width: 700px;
      min-width: 300px ;
      .title{
        font-size: 30px;
        font-weight: 600;
      }
      .subtitle{
        font-size: 25px;
        color: var(--primary-color);
          font-weight: 400;
          font-family: "Satisfy", cursive;
        
      }
      p{
        color: var(--text-color);
        text-align: center;
      }
    }
    .blog_slider{
      max-width: 100%;
    }
  }
  @media only screen and (max-width:1113px){
    padding-top: 70px;
  }
  @media only screen and (max-width:728px){
    .discover{
      .container{
        grid-template-columns: 100%;
      }
      
    }
    .discover2{
      .container{
       display: flex;
       flex-direction: column;
       gap: 50px;
       flex-direction: column-reverse;
      }
    }
    .products_journey{
      .grid{
        grid-template-columns: 100%;
      }
    }
    
  }
  @media only screen and (max-width:600px){
    gap: 30px;
  }
`;
export default HomePage;
