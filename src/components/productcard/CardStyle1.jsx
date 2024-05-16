import React from 'react'
import styled from 'styled-components'

const CardStyle1 = ({img,title,}) => {
  return (
    <Card>
      <img src={img} alt={img} />
      <div className="content">
        <div className="title"></div>
      </div>
    </Card>
  )
}
const Card = styled.div`
    border-radius: 5px;
    overflow: hidden;
   height: 500px;
    img{
        width: 100%;
        height: 100%;
        transition: all 0.5s;
    }
    &:hover{
      img{
        transform: scale(1.05);
        transition: all 0.5s;
      }
    }
`
export default CardStyle1
