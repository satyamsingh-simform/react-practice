import { useEffect, useState } from "react"

export const WindowWidthTracker = () => {

    const [size,setSize]=useState(window.innerWidth);

    useEffect(()=>{
        function handleSize(){
            setSize(window.innerWidth)
        }
        addEventListener("resize",handleSize);

        return ()=>{
          removeEventListener('resize',handleSize);
        }
    },[])

  return (
    <div>
        size:{size}
    </div>
  )
}
