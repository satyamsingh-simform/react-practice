import { useEffect, useState } from "react"

export const WindowWidthTracker = () => {

    const [size,setSize]=useState(0);

    useEffect(()=>{
        function handleSize(){
            setSize(window.innerWidth)
        }
        addEventListener("innerWidth",handleSize)
    },[])

  return (
    <div>
        
    </div>
  )
}
