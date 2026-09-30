import { useState, useMemo } from "react"
import ChildComp from "../comp/ChildComp"

const MemoHookReact = () => {
    const [countNumber, setCountNumber] = useState(0)
    const data = useMemo(() => {
        return {name:"sam",age:20}
    }, [])


    return (

        <>
            useMemo vs Memo Hook
            <h1>Parent Count <span style={{ 'color': "blue" }}></span> {countNumber}</h1>
            <button onClick={() => setCountNumber(countNumber + 1)}>Increamet </button>

            <ChildComp  data={data}/>

        </>
    )
}

export default MemoHookReact

