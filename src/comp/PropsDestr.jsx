import React from 'react'

const PropsDestr = ({name, age, ...obj}) => {
  return (
    <>


    {/* <h1>{props.name}- {props.age}</h1> */}
    

   <h1>{name}- {age}</h1>

   <h3>{JSON.stringify(obj) }</h3>
    
    
    </>
  )
}

export default PropsDestr