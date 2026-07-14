import { useRef, useState } from "react"

export const RenderCounter = () => {
    const renderCountRef=useRef(0);
    const [count,setCount]=useState(0);

    renderCountRef.current++;
    console.log('components render for this many times',renderCountRef.current);
    

  return (
    <div>
        count:{count} <br />
        <p>component render count:{renderCountRef.current}</p>
        <button onClick={()=>setCount((prev)=>{
            // renderCountRef.current++;
            return prev+1;
        })}>incCount</button> <br />

        <button onClick={()=>setCount(prev=>prev-1)}>decCount</button>
    </div>
  )
}
