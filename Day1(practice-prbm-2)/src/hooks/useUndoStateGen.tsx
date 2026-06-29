import { useRef, useState } from "react";

export const useUndoStateGen = <T,>(initialValue: T) => {
    console.log(typeof initialValue);
    
  const [state, setState] = useState(initialValue);
  const prevStateRef=useRef<T[]>([initialValue]);

  function setMyState(newVal:T){
    console.log(typeof newVal);
    prevStateRef.current.push(state)
    setState(newVal);
    console.log('-->',prevStateRef);
  }

  function undoState(){
    const prevState=prevStateRef.current.pop();
    if(prevState){
        setState(prevState)
    }
  }

  return [state,setMyState,undoState] as const;
};

//const [state,setState,undo]=useUndoState(initialValue);
