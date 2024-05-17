import React, { useState } from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Wrapper>
        <div className="desktop-nav">
          <div className="container">
            <div className="form">
              <input type="text" placeholder="Search for products" />
              <span className="search-icon">
                {" "}
                <CiSearch size={25} />
              </span>
            </div>
            <div className="nav-links">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">SHOP</a>
                </li>
                <li>
                  <a href="#">TESTIMONIALS</a>
                </li>
                <li className="logo">
                  <a href="">
                    <img src="/img/hrlogo.png" alt="" />
                    Pharmaceutical
                  </a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">ABOUT US</a>
                </li>
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </ul>
            </div>
            <div className="action">
              <div className="like">
                <CiHeart size={25} />
              </div>
              <div className="user">
                <AiOutlineUser size={25} />
              </div>
              <div className="cart">
                <IoCartOutline size={25} />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-nav">
          <div className="top">
            <div className="action">
              <IoIosMenu size={25} cursor={"pointer"} onClick={() => setToggle(true)} />
             
            </div>
            <div className="logo">
                  <a href="">
                    <img src="/img/hrlogo.png" alt="" />
                    Pharmaceutical
                  </a>
                </div>
            <div className="cart">
              <IoCartOutline size={25}  cursor={"pointer"}/>
              <span>0</span>
            </div>
          </div>
          <div className="bottom">
          <input type="text" placeholder="Search for products" />
              <button className="search-icon">
                {" "}
                <CiSearch size={25} />
              </button>
          </div>
        </div>
      </Wrapper>
      <Sidebar className={toggle?"show":""}>
        <div className="action">
          <RxCross2 size={25} cursor={"pointer"} onClick={()=>setToggle(false)}/>
          Close
        </div>
        <div className="form">
          <input type="text" placeholder="Serach for product" />
          <CiSearch size={25} className="icon" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">TESTIMONIALS</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">CONTACT US</a>
            </li>
            <li>
              <a href="">wishlist</a>
            </li>
            <li>
              <a href="">Compaire</a>
            </li>
            <li>
              <a href="">Login/register</a>
            </li>
          </ul>
        </div>
      </Sidebar>
    </>
  );
};
const Wrapper = styled.nav`
  .desktop-nav {
   padding: 10px 0;
   
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: start;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0%;
    left: 0;
    z-index: 9;
    /* box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;  */
   }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .form {
    max-width: 400px;
    min-width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    border-radius: 30px;
    input {
      border: none;
      outline: none;
      padding: 0 15px;
      font-size: 15px;
      background-color: transparent;
    }
    .search-icon {
      height: 40px;
      width: 40px;
      font-size: 25px;
      background-color: var(--primary-color);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
  .nav-links {
    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      align-items: center;
    }
    .logo{
      a{
        display: flex;
        align-items: end;
        font-size: 22px;
        font-weight: 300;
        text-transform: capitalize;
        font-weight: 400;
      }
    }
    img {
      max-width: 25px;
      height: auto;
      margin-bottom: 4px;
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 600;
      color: #333;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
  .action {
    display: flex;
    gap: 10px;
    .cart {
      position: relative;
      span {
        height: 15px;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 15px;
        background-color: var(--primary-color);
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -5px;
      }
    }
  }
  .mobile-nav{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 9;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    display: none;
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 10px;
    }
    .logo{
      a{
        display: flex;
        align-items: end;
        font-size: 22px;
        font-weight: 300;
        text-transform: capitalize;
        font-weight: 400;
        color: #333;
        text-decoration: none;
      }
    }
    img {
      max-width: 25px;
      height: auto;
      margin-bottom: 4px;
    }
    .action{
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .cart {
      position: relative;
      span {
        height: 15px;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 15px;
        background-color: var(--primary-color);
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -5px;
      }
    }
    .bottom{
      display: flex;
      align-items: center;
      width: 95%;
      justify-content: space-between;
     overflow: hidden;
     border-radius: 3px;
      margin: 10px;
      display: none;
      input{
        font-size: 15px;
        font-weight: 600;
        color: var(--text-color);
        border: none;
        outline: none;
        height: 100%;
        border: 1px solid rgba(0,0,0,0.2);
        padding:10px 5px;
        width: 100%;
      }
      button{
        background-color: var(--primary-color);
        color: #fff;
        padding: 5px 10px;
        border: 1px solid var(--primary-color);
      }
    }

  }
  @media only screen and (max-width:1113px){
    .mobile-nav{
      display: block;

    }
    .desktop-nav{
      display: block;
    }
  }
`;
const Sidebar = styled.aside`
  width: 300px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: -300px;
  z-index: 20;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  transition: all 0.5s;
  &.show{
    left: 0;
    transition: all 0.5s;
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 15px 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
    gap: 5px;
    transition: all 0.2s;
    &:hover {
      color: gray;
      transition: all 0.2s;
    }
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    background-color: #fff;
    color: var(-text-color);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    /* border-bottom: 1px solid rgba(0,0,0,0.1); */
    input {
      font-size: 15px;
      font-weight: 600;

      border: none;
      outline: none;
    }
    .icon {
      color: gray;
    }
  }
  .nav-links {
    margin-top: 5px;
    ul {
      display: flex;
      flex-direction: column;
      li {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background-color: #fff;
        a {
          height: 100%;
          width: 100%;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 600;
          color: #333;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
 
`;
export default Header;
