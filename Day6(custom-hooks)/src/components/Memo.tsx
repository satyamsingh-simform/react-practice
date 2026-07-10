
// // your own custom useMemo hook!
// const memoizedValue=useCustomMemo(callback,dependency)

import { useState } from "react";
import { useCustomMemo } from "../hooks/mentor-hooks/useCustomMemo"

export const Memo = () => {
    const[count,setCount]=useState(2);
    const[change,setChange]=useState(0);

    const memoizedValue=useCustomMemo(heavyCal,[count],5);
    console.log('count',count);

    function heavyCal(){
        return Math.pow(count,count);
    }

  return (
    <div>
        memoizedValue:{memoizedValue} <br />
        <button onClick={()=>setCount(prev=>prev+1)}>setCount</button><br />
        <button onClick={()=>setChange(prev=>prev+1)}>chnage</button>
    </div>
  )
}
