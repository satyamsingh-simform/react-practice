/*
import { useEffect, useRef, useState } from "react";

export const useCustomMemo =<T,R>(callback:()=>R,dependency:T[])=> {
    // const [memoizedValue,setMemoizedValue]=useState<R|number>(0);
    // useEffect(()=>{
    //     console.log('hello');
    //     setMemoizedValue(callback())
    // },[dependency])

    //memoRef.current?.dependency!==dependency

    const memoRef=useRef<{dependency:T[],value:R}|null>(null);

    const changed=memoRef.current===null || 
    memoRef.current.dependency.length!==dependency.length  || 
    dependency.some((val,index)=>val!==memoRef.current?.dependency[index])
    console.log(changed);

    if(changed){
      console.log('useCustomMemo runs');
      memoRef.current={dependency:dependency,value:callback()}
    }
    return memoRef.current?.value;
}
*/

import { useRef } from "react"

export const useCustomMemo = <T,R>(callback:()=>T,dependency:R[]) => {
  const memoRef=useRef<{dependency:R[],value:T}|null>(null);

  const changed=memoRef.current===null || dependency.some((dep,index)=>dep!==memoRef.current?.dependency[index])

  if(changed){
    console.log('callback called');
    memoRef.current={dependency:dependency,value:callback()};
  }

  return memoRef.current?.value
}
