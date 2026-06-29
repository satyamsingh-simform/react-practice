import { useState } from "react";
import { useUndoStateGen } from "../hooks/useUndoStateGen";

export const Hook = () => {
  const [input,setInput]=useState(1);
  const [state, setState, undoState] = useUndoStateGen(1);

  return (
    <div>
        <h1>HOOK</h1>
        <h1>{state}</h1>
        <input type="text"
            value={input}
            onChange={(e)=>setInput(Number(e.target.value))}
            className="border"
            placeholder="enter state type"
        /> <br />
        <button onClick={()=>setState(input)}>setState</button><br />
        <button onClick={()=>undoState()}>undoState</button>
    </div>
  );
};
