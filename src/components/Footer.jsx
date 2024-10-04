import React from "react";
import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

const Footer = () => {
  return (
    <Wrapper>
      {/* <div className="about_service">
        <div className="container">
          <div className="service_card">
            <div className="icon"><img src="/img/shipping.png" alt="" /></div>
            <div className="info">
              <span className="title">Free shipping</span>
              <p>Free Shipping on orders of above Rs.1099/- only</p>
            </div>
          </div>
          <div className="service_card">
            <div className="icon"><img src="/img/sopport.png" alt="" /></div>
            <div className="info">
              <span className="title">24/7 Support</span>
              <p>Our Team works for 24*7 to help you</p>
            </div>
          </div>
          <div className="service_card">
            <div className="icon"><img src="/img/security.png" alt="" /></div>
            <div className="info">
              <span className="title">100% safe</span>
              <p>Our products are Dermatologist Certified</p>
            </div>
          </div>
          <div className="service_card">
            <div className="icon"><img src="/img/phone.png" alt="" /></div>
            <div className="info">
              <span className="title">online payment</span>
              <p>All types of Secured Online payment Accepted</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-links">
      <div className="container">
        <div className="company_detail">
        <div className="logo">
                  <a href="">
                    <img src="/img/hrlogo.png" alt="" />
                    Pharmaceutical
                  </a>
                </div>
          <p>HR Pharmaceuticals is dedicated to offering top-notch dermatological care products, driven by a vision to deliver the highest quality in derma care.</p>
          <div className="other_info">
            <div className="location">
              <span>
                <FaLocationArrow />
              </span>
              Plot no-11,Sanjay Colony,Arthala,Ghaziabad
            </div>
            <div className="phone">
              <span>
                <MdOutlinePhoneAndroid />
              </span>
              Phone:8929055203
            </div>
            <div className="mail">
              <span>
                <CiMail />
              </span>
              Mail:care@hrpcpl.com
            </div>
          </div>
        </div>
        <div className="categories">
          <span className="title">categories</span>
          <ul>
            <li>
              <a href="#">Anti acne range</a>
            </li>
            <li>
              <a href="#">anti eczema rabge</a>
            </li>
            <li>
              <a href="#">face wash/sun screen ragne</a>
            </li>
            <li>
              <a href="#">anti fungle range</a>
            </li>
            <li>
              <a href="#">shampo/hair loss</a>
            </li>
            <li>
              <a href="#">others</a>
            </li>
          </ul>
        </div>
        <div className="usefull-link">
          <span className="title">usefull links</span>
          <ul>
            <li>
              <a href="">privacy policy</a>
            </li>
            <li>
              <a href="">returns</a>
            </li>
            <li>
              <a href="">terms & conditions</a>
            </li>
            <li>
              <a href="">contact us</a>
            </li>
            <li>
              <a href="">latest news</a>
            </li>
            <li>
              <a href="">our sitemap</a>
            </li>
          </ul>
        </div>
        <div className="others">
          <span className="title">Others</span>
          <ul>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">instagram profile</a>
            </li>
            <li>
              <a href="#">new collection</a>
            </li>
            <li>
              <a href="#">free consultation</a>
            </li>
            <li>
              <a href="#">raise ticket</a>
            </li>
            <li>
              <a href="#">call helpline</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <div className="social-media">
            <span className="facebook">
              <FaFacebookF size={20}/>
            </span>
            <span className="twitter">
              <BsTwitterX size={20}/>
            </span>
            {/* <span className="pinterest">
              <FaPinterest size={20}/>
            </span> */}
            <span className="linkedin">
              <FaLinkedinIn size={20}/>
            </span>
            {/* <span className="telegram">
              <FaTelegramPlane size={20}/>
            </span> */}
          </div>
          <span className="title">checkout us at</span>
          {/* <div className="shoping-app">
            <span className="amazon">
             <img src="/img/amazon.png" alt="" />
            </span>
            <span className="flipkart">
              <img src="/img/flipkart.png" alt="" />
            </span>
          </div> */}
        </div>
      </div>
      </div>
      {/* <div className="consultation">
        <div className="container">
          <div className="left">
            <div className="logo">
              <img src="/img/consultation.png" alt="" />
            </div>
            <div className="info">
              <span className="title">Get Free Consultation Now</span>
              <p>Receive a complimentary prescription for your skin and hair care concerns.</p>
            </div>
          </div>
          <div className="form">
            <input type="text" placeholder="your email address" />
            <button>know more</button>
          </div>
        </div>
      </div> */}
      {/* <div className="copyright">
        <div className="container">
          <div className="text-content">
          Developed By <strong>Brijesh Jha</strong> 2024 <strong>Software Developer</strong>
          </div>
          <div className="images"></div>
        </div>
      </div> */}
    </Wrapper>
  );
};
const Wrapper = styled.footer`
background-color: #f7f7f7;
.about_service{
  padding: 50px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;
    flex-wrap: wrap;
  }
  .service_card{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    .title{
      color: #333;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
    }
    p{
      line-height: 25px;
      color: var(--text-color);
      text-transform: capitalize;
    }
  }
}
.footer-links{
  padding: 50px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .container{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 20px;
    justify-items: start;
   align-items: start;
   flex-wrap: wrap;
  }
  .company_detail{
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .logo{
      a{
        display: flex;
        align-items: end;
        font-size: 22px;
        font-weight: 300;
        text-transform: capitalize;
        font-weight: 400;
        text-decoration: none;
        color: #333;
      }
      img {
      max-width: 25px;
      height: auto;
      margin-bottom: 4px;
    }
    }
   
   
    p{
      font-size: 14px;
      color: var(--text-color);
    }
    .other_info{
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--text-color);
      div{
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

  }
  .categories,.usefull-link,.others{
    display: flex;
    flex-direction: column;
   
    align-items: start;
    gap: 20px;
    .title{
      color: #333;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
    }
    ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      a{
        text-decoration: none;
        color: var(--text-color);
        font-size: 15px;
        transition: all 0.2s;
        text-transform: capitalize;
        
        &:hover{
          color: var(--primary-color);
          transition: all 0.2s;
        }
      }
    }
  }
  .social{
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 250px;
    .title{
      color: #333;
      font-weight: 600;
      font-size: 18px;
      text-transform: capitalize;
      text-align: center;
    }
    .social-media{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 5px;
      span{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background-color: black;
        cursor: pointer;
      }
      .facebook{
        background-color: #3b5998;
      }
      .linkedin{
        background-color: #0077b5;
      }
      .twitter{
        background-color: black;
      }
      .pinterest{
        background-color: #bd081c;
      }
      .telegram{
        background-color: #0088cc;
      }
    }
    .shoping-app{
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: center;
    }
  }
}
.consultation{
  padding: 30px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .left{
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .info{
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title{
      font-size: 18px;
      color: #333;
      font-weight: 600;
      text-transform: capitalize;
    }
    p{
      color: var(--text-color);
      font-size: 15px;
    }
  }
  .form{
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
    input{
      padding: 10px 20px;
      font-size: 15px;
      color: var(--text-color);
      outline: none;
      border: 1px solid rgba(0,0,0,0.3);
      background-color: #fff;
    }
    button{
      white-space: nowrap;
      padding: 10px 20px;
      background-color: var(--primary-color);
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      border: 1px solid var(--primary-color);
      &:hover{
        
      }
    }
  }
}
.copyright{
  padding: 30px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .container{
    .text-content{
      color: var(--text-color);
      strong{
        color: #333;
      }
    }
  }
}
@media only screen and (max-width: 1200px) {
  .about_service{

  .service_card{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
  text-align: center;
    
  }
}
}
@media only screen and (max-width:1024px) {
  .footer-links{
    .container{
      display: flex;
      gap: 50px;
      flex-wrap: wrap;
    }
    .categories,.usefull-link,.others{
      
    }
  }
}
@media only screen and (max-width:768px) {
  .about_service{
    .container{
      grid-template-columns: repeat(2,1fr);
    }
    .service_card{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: row;
    text-align: start;
    
  }
  }
  
}
@media only screen and (max-width:600px){
  .about_service{
    .container{
      grid-template-columns: 100%;
    }
    .service_card{
      align-items: start;
      justify-content: start;
      gap: 20px;
    }
  }
  .copyright{
  padding: 30px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .container{
    .text-content{
      color: var(--text-color);
      font-size: 12px;
      strong{
        color: #333;
      }
    }
  }
}
}
`;
export default Footer;