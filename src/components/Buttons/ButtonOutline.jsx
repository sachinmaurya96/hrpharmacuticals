import React from 'react'
import styled from 'styled-components'

const ButtonOutline = ({children}) => {
  return (
    <Wrapper>
      <button>{children}</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    button{
        padding: 10px 20px;
        color:#EDC967;
        font-weight: 600;
        border: 1px solid #EDC967;
        transition: all 0.3s;
        background-color: transparent;
        width: max-content;
        text-transform: uppercase;
        &:hover{
            background-color: var(--primary-color);
            color: #fff;
            transition: all 0.3s;
        }
    }
`
export default ButtonOutline