import React, { memo, useCallback, useState } from 'react'
// git add .
// git commit -m "Add React Series Day 2"
// git push
const Button = memo(({ onClick, children }) => {
    console.log(`button ${children}`)
    return (
        <>
            <button className={children == "Increament" ? "bg-blue-500 mr-5 text-white font-bold py-2 px-4 rounded" : "bg-red-500  text-white font-bold py-2 px-4 rounded"} onClick={onClick}>{children}</button>
        </>
    )
})

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);

    
    const Increament = useCallback(() => {
        console.log('inc fun');

        setCount((count) => count + 1)
    }, [])

    


  const Decreament = useCallback(() => {
        console.log('dec fun')
        setCount((count) => count - 1)
    }, [])





    return (
        <>
            <h1 className='text-center'>{count}</h1>
            <Button onClick={Increament}>Increament</Button>
            <Button onClick={Decreament}>Decreament</Button>
        </>
    )
}

export default UseCallBackHook