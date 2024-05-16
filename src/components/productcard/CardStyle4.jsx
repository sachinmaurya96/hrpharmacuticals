import React from 'react'
import styled from 'styled-components'

const CardStyle4 = ({img,num}) => {
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
                Development
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto molestias autem quam assumenda dolores aut perspiciatis ut placeat voluptatibus? Ducimus commodi rem quam tempore aliquid!
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
