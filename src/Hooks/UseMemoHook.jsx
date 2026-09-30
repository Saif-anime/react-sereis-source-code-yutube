import React, {useState} from 'react'
import ChildMemo from '../comp/ChildMemo'

const UseMemoHook = () => {
     const [countNumber, setCountNumber] = useState(0)
    return (
        <>

        
<h1>Parent Count <span style={{ 'color': "blue" }}></span> {countNumber}</h1>
<button onClick={() => setCountNumber(countNumber + 1)}>Increamet </button>

<ChildMemo/>


        </>
    )
}

export default UseMemoHook