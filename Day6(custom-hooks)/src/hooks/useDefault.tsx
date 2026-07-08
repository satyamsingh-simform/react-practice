import { useEffect, useState } from "react";

// works exactly like useState but whenever state is null or undefined, it returns defaultValue instead of null or undefined

export const useDefault =<T,>(initalValue:T, defaultValue:T) => {
  const [state, setState] = useState<T|null|undefined>(initalValue);

  useEffect(()=>{
    setState((prev)=>{
        if(prev===null||undefined){
            return defaultValue
        }
        return prev;
    })
  },[state])

  return [state, setState] as const;
};
