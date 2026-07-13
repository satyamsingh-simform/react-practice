import { useRef, useState, type SetStateAction } from "react"

export const usePreviousValueTracker = () => {
    const [current, setCurrent]=useState(0);
    const prevRef=useRef(current);

    function setCurrentWrapper(value:SetStateAction<number>){
        setCurrent(value);
        prevRef.current=current;
    }

  return [current,setCurrentWrapper,prevRef.current] as const;
}
