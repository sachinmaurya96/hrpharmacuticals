import React from 'react'
import styled from 'styled-components'

const CardStyle4 = ({img,num,Title,Content}) => {
  return (
    <Card>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="card_content">
        <div className="number">
            {num}
        </div>
        <div className="info">
            <div className="title">
                {Title}
            </div>
            <div className="desc">
                {Content}
            </div>
        </div>
      </div>
    </Card>
  )
}
const Card = styled.div`
    img{
        width: 100%;
        height: auto;
    }
    .card_content{
        display: flex;
        gap: 10px;
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: start;
    }

    .title{
        color: #333;
        font-weight: 600;
        font-size: 18px;
        
    }
    .desc{
        font-size: 15px;
        color: gray;
    }
    .number{
        font-size: 100px;
        font-weight: 400;
        color: var(--primary-color);
    }
`
export default CardStyle4
