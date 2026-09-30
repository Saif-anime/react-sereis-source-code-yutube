import React from 'react'
import styled from 'styled-components'

const StyleCompProp = () => {

    const Button = styled.button`
    background-color: ${(props) => props.age == 20? "purple":"green" };
    color:white;
    border:none;
    padding:10px ${ (props) => props.age >= 18 ? '50px':'10px'  };
    border-radius:20px;
    cursor:pointer;

    &:hover{
    background-color:red;
    
    }
    
    `


  return (
    <>
    
    <Button age="20">Free Use</Button>
  
    
    </>
  )
}

export default StyleCompProp