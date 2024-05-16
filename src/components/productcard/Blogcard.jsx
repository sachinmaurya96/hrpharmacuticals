import React from 'react'
import styled from 'styled-components'
import { FaUserCircle } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";

const Blogcard = ({img}) => {
  return (
    <Card>
      <div className="date">
        <span className='day'>26</span>
        <span className='month'>April</span>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="blog_content">
        <div className="button">
           <button> unrecognized</button>
        </div>
        <div className="title">
            Acne Scar removal treatment
        </div>
        <div className="action">
            <span className="postedby">Posted By <FaUserCircle  cursor={"pointer"}/> Sachin</span>
            <span className="comment"><FaRegCommentAlt cursor={"pointer"}/></span>
            <span className="share"><IoShareSocialOutline  cursor={"pointer"}/></span>
        </div>
        <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dicta cumque ut maxime, labore doloribus reiciendis minus iusto incidunt ab!...
        </div>
        <div className="button2">
            <a href="#">Continue reading</a>
        </div>
      </div>
    </Card>
  )
}
const Card = styled.div`
position: relative;
box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
&:hover{
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  img{
    transition: all 0.3s;
    transform: scale(1.04);
  }
}
.image{
  width: 100%;
  height: 280px;
  overflow: hidden;
}
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        background-position: center;
        transition: all 0.3s;
    }
    .date{
      position: absolute;
      background-color: #fff;
      top: 10px;
      left: 10px;
      display: flex;
      flex-direction: column;
      padding: 5px 10px;
      z-index: 3;
      .day{
        
        font-size: 30px;
        color: #333;

      }
      .month{
        color: #333;
      }

    }
    .blog_content{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding: 0 20px 30px 20px;
    }
    .button{
      background-color: #fff;
      margin-top: -15px;
      z-index: 3;
      button{
        border: none;
        background-color: var(--primary-color);
        color: #fff;
        text-transform: uppercase;
        font-size: 13px;
        padding: 5px 8px;
        font-weight: 600;
        letter-spacing: 1px;
      }
    }
    .title{
      font-size: 20px;
      text-transform: capitalize;
      color: #333;
      font-weight: 600;
      text-align: center;
    }
    .desc{
      color: var(--text-color);
      font-size: 15px;
      line-height: 20px;
      text-align: center;
    }
    .action{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #b0afaf;
      .postedby{
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
    .button2{
      a{
        font-size: 13px;
        text-transform: uppercase;
        color: var(--primary-color);
        font-weight: 600;
        text-decoration: none;
       transition: all 0.3s;
      }
      &:hover{
        a::after{
          content:"...";
          transition: all 0.3s;
        }
      }
    }
`
export default Blogcard
