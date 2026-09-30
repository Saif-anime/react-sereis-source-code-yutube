import React, { useReducer } from 'react'

const UseReducerHook = () => {

  // syntex 
  const init = { count: 0 }


  const [state, dispatch] = useReducer(reducer, init)
  return (
    <>
      <div>{init.count}</div>

      <button></button>

    </>
  )
}

export default UseReducerHook