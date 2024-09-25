import React from 'react'
import styled from 'styled-components'

const ButtonStyle2 = ({children}) => {
  return (
    <Wrapper>
      <button>{children}</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    button{
        // color: #fff;
        color:black;
        background-color: #EDC967;
        padding: 10px 20px;
        outline: none;
        border: none;
        width: max-content;
        text-transform: uppercase;
        font-weight: 600;
    }
`
export default ButtonStyle2