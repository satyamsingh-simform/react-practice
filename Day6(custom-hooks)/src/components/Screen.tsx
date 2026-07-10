import { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen"

// const isVisible=useonScreen(ref)// returns true if element is visible on screen.

export const Screen = () => {
    const divRef=useRef<HTMLDivElement|null>(null)
    const isVisible=useOnScreen(divRef);
    console.log('--->',isVisible);
  return (
    <div className="h-100 w-100 border"
      ref={divRef}
    >
        <h1>Visible:{isVisible.toString()}</h1>
    </div>
  )
}
