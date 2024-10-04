import React from "react";
import styled from "styled-components";

const AboutCard = ({ title, description, img }) => {
  return (
    <Card>
      <div className="thumbnail">
        <img src={img} alt="" />
      </div>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};
const Card = styled.div`
  .thumbnail {
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description {
    padding: 20px 0;
  }
  h2 {
    text-align: center;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: #6a6a6a;
    margin-top: 20px;
  }
`;
export default AboutCard;
