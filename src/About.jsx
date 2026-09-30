import React, {use} from 'react'
import { Theme } from './ContextAPI/ThemeProvider'

const About = () => {

  const {color, handleStatechange} = use(Theme);



  return (
     <div className={`h-screen flex flex-col items-center ${color === "dark" ? "bg-gray-900": "bg-gray-100"}`}>
      <button onClick={() => handleStatechange()} className="m-4 p-4 bg-blue-400 text-white w-30 rounded">{color} mode </button>

      <p className={color === "dark" ? "text-gray-100": "text-gray-900"}>the background is {color} </p>

     </div>
  )
}

export default About