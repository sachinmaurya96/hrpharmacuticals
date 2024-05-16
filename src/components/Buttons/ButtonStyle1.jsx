import React from 'react'
import styled from 'styled-components'

const ButtonStyle1 = ({children}) => {
  return (
    <Button>
      {children}
    </Button>
  )
}
const Button = styled.button`
border: none;
cursor: pointer;
    font-size: 13px;
    text-transform: uppercase;
    width: max-content;
    border-bottom: 2px solid var(--primary-color);
    font-weight: 600;
    color: #333;
    
    outline: none;
    background-color: transparent;
    transition: all 0.2s;
    &:hover{
        color: var(--text-color);
    }
`
export default ButtonStyle1
