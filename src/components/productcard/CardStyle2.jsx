import React from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const CardStyle2 = ({ img , Title ,Description}) => {
  return (
    <Card>
      {/* <div className="discount">15%</div> */}
      {/* <div className="side_action">
        <span className="like">
          <CiHeart size={25} />
        </span>
        <span className="cart">
          <IoCartOutline size={25} />
        </span>
        <span className="search">
          <CiSearch size={25} />
        </span>
      </div> */}
      <div className="image">
        <img src={img} alt="" />
        <span className="comparee"></span>
      </div>
      <div className="content">
        <span className="title">{Title}</span>
        <span className="desc">{Description}</span>
        {/* <span className="price">$221</span> */}
      </div>
      {/* <div className="star-rating">
        <span>⭐⭐⭐⭐⭐</span>
      </div> */}
    </Card>
  );
};
const Card = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 30px;
  img {
    width: 100%;
    height: auto;
  }
  .discount {
    background-color: var(--primary-color);
    color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    position: absolute;
    top: 50px;
    left: 15px;
  }
  .side_action {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    position: absolute;
    right: -50px;
    top: 50px;
    transition: all 0.3s;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    .title {
      color: #333;
      text-transform: capitalize;
      font-weight: 600;
    }
    .desc {
      color: var(--text-color);
    }
    .price {
      font-weight: 600;
      color: var(--primary-color);
    }
  }
  .star-rating {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: -20px;
    transition: all 0.3s;
  }
  &:hover {
    .side_action {
      right: 10px;
      transition: all 0.3s;
    }
    .star-rating {
        bottom: 0;
        transition: all 0.3s;
    }
  }
  @media only screen and (max-width: 426px){
    &:hover {
    .side_action {
      right: 5px;
      transition: all 0.3s;
    }
  }
    .side_action {
   
    gap: 5px;
    right: -50px;
    top: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  }
`;
export default CardStyle2;