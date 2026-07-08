import { useEffect, useState } from "react";

export const useCustomMemo =<T,R>(callback:()=>R,dependency:T)=> {
    const [memoizedValue,setMemoizedValue]=useState<R|number>(0);
    useEffect(()=>{
        console.log('hello');
        setMemoizedValue(callback())
    },[dependency])

  return memoizedValue;
}
