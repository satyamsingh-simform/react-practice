import { useRef, useState, type SetStateAction } from "react"

export const usePrevState = <T,>(initial:T) => {
    const [state,setState]=useState(initial);
    const prevRef=useRef([initial]);

    function setStateWrapper(valueCallback:SetStateAction<T>){
        setState(valueCallback)
        prevRef.current.push(state);
        console.log(prevRef);
    }

    function getPrevState(){
    console.log(prevRef);
        setState(prevRef.current.pop()!);
    }

  return [state,setStateWrapper,getPrevState] as const;
}
