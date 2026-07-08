// const isVisible=useOnScreen(ref)// returns true if element is visible on screen.

import { useEffect, useState } from "react"

export const useOnScreen = () => {
    const[isVisible,setIsVisible]=useState(false);

    console.log('isVisible',isVisible);
    
    useEffect(()=>{
        setIsVisible(true);

        return()=>{
            setIsVisible(false);
        }
    },[])

  return isVisible;
}
