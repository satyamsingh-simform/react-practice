/*
import { useEffect, useState, type SetStateAction } from "react";

// works exactly like useState but whenever state is null or undefined,
//  it returns defaultValue instead of null or undefined

export const useDefault =<T,>(initalValue:T|null|undefined, defaultValue:T) => {
  const [state, setState] = useState(initalValue??defaultValue);
  
  // useEffect(()=>{
  //   setState((prev)=>{
  //       if(prev===null||undefined){
  //           return defaultValue
  //       }
  //       return prev;
  //   })
  // },[state])

  function setStateWrapperFn(valueOrCallback:SetStateAction<T|null|undefined>){
    setState((prev)=>{
      const nextState=typeof valueOrCallback ==='function'
      ?valueOrCallback(prev)
      :valueOrCallback;

      if(nextState===null||undefined){
        return defaultValue;
      }
      return nextState
    })
  }

  return [state, setStateWrapperFn] as const;
};
*/

import { useState } from "react"

export const useDefault = <T,>(initalValue:T|null|undefined,defaultValue:T) => {
  const [state,setState]=useState(initalValue);

  return [state ?? defaultValue,setState] as const;
}
