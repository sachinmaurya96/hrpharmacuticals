import React from "react";
import styled from "styled-components";
import AboutCard from "../components/AboutCard";

const AboutePage = () => {
  return (
    <Wrapper>
      <div className="about-detail">
        <div>
          <img src="/img/about.jpg" alt="about" />
        </div>
        <div>
          <h1>About Us</h1>
          <p>
            Hr Pharmaceuticals is a specialized division dedicated to delivering advanced dermatological solutions for the effective treatment and care of skin, hair, and nail conditions. With a strong focus on innovation, research, and quality, we aim to improve the lives of
            individuals by providing safe and effective dermatological products.
          </p>
        </div>
      </div>
      <div className="other-details">
        <AboutCard
          title={"Quality Assurance and Safety"}
          img={"/img/doc1.png"}
          description={
            "The safety and efficacy of our dermatological products are of utmost importance to us. We follow stringent quality control measures throughout our manufacturing processes, ensuring that our products meet or exceed global regulatory standards. From the selection of high-quality ingredients to rigorous testing procedures, we take every step necessary to ensure the safety and reliability of our dermatological offerings."
          }
        />
        <AboutCard
          title={"Our Commitment to Dermatological Excellence"}
          description={
            "At Hr Pharmaceuticals Dermatology, we understand the impact that skin conditions can have on a person's overall well-being and self-confidence. Therefore, we are committed to developing high-quality dermatological products that address a wide range of skin concerns, including but not limited to acne, eczema, psoriasis, fungal infections, pigmentation disorders, and aging-related issues."
          }
          img={"/img/blog2.png"}
        />
        <AboutCard
          title={"Cutting-Edge Research and Development"}
          img={"/img/blog4.png"}
          description={
            "We invest significantly in research and development to stay at the forefront of dermatological advancements. Our team of experienced scientists, dermatologists, and researchers work diligently to identify and develop innovative formulations that effectively target specific skin concerns. By harnessing the latest scientific knowledge and technologies, we strive to provide dermatological solutions that deliver superior results."
          }
        />
      </div>
      <div className="code-conduct">
        <h1>Code of Conduct</h1>
        <p>Our Global Code of Conduct governs every aspect of our operations. Sun Pharma is a family of thousands of people, working across many countries, speaking multiple languages, and all united, with one common purpose: to make good health accessible and affordable to local communities and society at large. Through active fieldwork, dedicated research teams, and in recognition of the efforts who work behind the scenes to combat illness and disease, the Sun Pharmaceutical Group helps as many people as possible, to secure their right to good health. The way we work every day is important to us.</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .about-detail {
    padding: 80px 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    img {
      width: 80%;
      height: auto;
    }
    p {
      margin-top: 10px;
      color: gray;
      font-weight: 500;
    }
    h1 {
      font-weight: 600;
      font-size: 40px;
      color: #1e1e1e;
    }
  }
  .other-details {
    padding: 50px 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .code-conduct{
    padding: 0 200px 100px 200px;
    h1{
      font-weight: 600;
      font-size: 40px;
      color: #1e1e1e;
      text-align: center;
    }
    p{
      margin-top: 10px;
      color: gray;
      font-weight: 14px;
    }
  }
  @media only screen and (max-width: 1113px){
    .about-detail{
      padding: 80px 50px 10px 50px;
    }
    .other-details{
      padding: 50px 50px;
    }
    .code-conduct{
      padding: 0 50px 100px 50px;
    }
  }
  @media only screen and (max-width: 728px){
    .about-detail{
      grid-template-columns: 100%;
      h1{
        text-align: center;
      }
    }
    .other-details{
      grid-template-columns: 100%;
    }
  }
  @media only screen and (max-width: 425px){
    .about-detail{
      padding: 80px 20px 10px 20px;
      h1{
        font-size: 30px;
      }
    }
    .other-details{
      padding: 0px 20px;
    }
    .code-conduct{
      padding: 0 0 50px 20px;
      h1{
        font-size: 30px;
      }
    }
  }
`;
export default AboutePage;
