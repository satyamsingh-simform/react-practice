import { useEffect, useRef, useState, type SetStateAction } from "react";

/*
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

    // function setStateFn(valueOrCallback:T | ((value:T)=>T)){
    //     setState(valueOrCallback);
    //     count.current++;
    // }

    function setStateFn(value:SetStateAction<T>){
        setState(value);
        count.current++;
    }

    return [state,setStateFn,count.current] as const;
}
*/



export const useUpdateCountState = (initialValue:number) => {
    const [state,setState]=useState(initialValue);
    const countRef=useRef(0);

    function setStateWrapper(valueOrCallback:SetStateAction<number>){
        setState(valueOrCallback);
        countRef.current+=1;
    }

  return [state,setStateWrapper,countRef.current] as const;
}
