import React from 'react'
import styled from 'styled-components'
import ButtonStyle1 from '../Buttons/ButtonStyle1'

const CardStyle3 = () => {
  return (
    <Card>
      <div className="image">
        <img src="/img/product6.png" alt="" />

      </div>
      <div className="content">
        <span className="title">Malasma Range</span>
        <div className="button">
            <ButtonStyle1>Explore Now</ButtonStyle1>
        </div>
      </div>
    </Card>
  )
}
const Card = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;
transition: all 0.3s;
    img{
        width: 100%;
        height: auto;
        transition: all 0.3s;
    }
    .content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        align-items: center;
      background: #fff;
        z-index: 2;
        height: 70px;
        width: 80%;
        margin-top: -50px;
        padding: 10px 0;
        .title{
            color: #333;
            font-weight: 600;
        }
    }
    &:hover{
        img{
            transform: scale(1.04);
            transition: all 0.3s;
        }
    }
`
export default CardStyle3
