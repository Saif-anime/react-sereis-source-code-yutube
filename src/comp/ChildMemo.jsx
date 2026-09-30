import React, {useMemo} from 'react'

const ChildMemo = () => {

    const totalVal = () =>{

        let i = 0;
        for(i; i<1000000000; i++){
           i+=1;
        }
        return i;
    }


    const valuecache = useMemo(() =>totalVal(), [] )
    // let sumtotal = totalVal();

  return (
    <div>Child Component Value {valuecache}</div>
  )
}

export default ChildMemo