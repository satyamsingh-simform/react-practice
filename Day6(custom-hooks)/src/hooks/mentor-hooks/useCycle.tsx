/*
// hook that cycle through values.// mode: current value// cycle: function that changes 
// the current value to the next in the sequence, or the first if current value is last

import { useRef, useState } from "react";


export const useCycle = <T,>(arr:T[]) => {
    // const [mode,setMode]=useState(arr[0]);
    // const arrIndex=useRef(0);

    // function cycle(){
    //     console.log((arrIndex.current+1)%arr.length);
        
    //     setMode(arr[(arrIndex.current+1)%arr.length]);
    //     arrIndex.current=(arrIndex.current+1)%arr.length;
    // }

    const [index,setIndex]=useState(0);
    const mode=arr[index];

    function cycle(){
        setIndex((prev)=>(prev+1)%arr.length)
    }

    return [mode,cycle] as const;
}
*/

import { useState } from "react"


export const useCycle = (arr:string[]) => {
    const [index,setIndex]=useState(0);
    const mode=arr[index];

    function cycle(){
        setIndex((index+1)%arr.length)
    }

  return [mode, cycle] as const;
}
