import { useRef, useState } from "react"

export const useUndoState = ({initialValue}:{initialValue:string}) => {
    const [state,setState]=useState(initialValue)
    const undoRef=useRef<string[]>([])

    function undo(name:string){
      setState(name);
      for(let i=0;i<initialValue.length;i++){
        undoRef.current[i]=initialValue.charAt(i);
      }
      return undoRef.current[initialValue.length]
    }

    return[state,setState,undo] as const
}

//const [state,setState,undo]=useUndoState(initialValue);