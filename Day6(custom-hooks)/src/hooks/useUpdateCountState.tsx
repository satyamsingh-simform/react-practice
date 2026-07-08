import { useEffect, useRef, useState } from "react";

export const useUpdateCountState = <T,>(iniitialState:T) => {
    // const[state,setState]=useState(iniitialState);
    // const[count,setCount]=useState(0);
    // const initialRenderRef=useRef(true);
    // // const countRef=useRef(0);

    // useEffect(()=>{
    //     if(initialRenderRef.current){
    //         console.log('initial render');
            
    //         initialRenderRef.current=false;
    //         return;
    //     }
    //     // countRef.current=countRef.current+1;
    //     setCount(prev=>prev+1);
    //     console.log('--->',count);
    // },[state])

    const [state,setState]=useState(iniitialState);
    const count=useRef(0);

    setState((prev)=>{
        count.current++;
        return prev+1;
    })

    return [state,setState,count.current] as const;
}
