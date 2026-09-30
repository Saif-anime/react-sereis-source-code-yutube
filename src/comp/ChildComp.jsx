import React, { useRef, memo } from 'react'

const ChildComp = ({data}) => {
    const count = useRef(0)
    
  return (
    <>

 
<h2>Name: {data.name}</h2>

    <h1>this is child compononet <span style={{color:'red'}}>{count.current++}</span></h1>
    
    </>
  )
}

export default memo(ChildComp);