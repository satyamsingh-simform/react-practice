import { useUndoState } from "../hooks/useUndoState";

export const Counter = () => {
      const [name,setName,undo]=useUndoState({initialValue:'satyam'});

      console.log("name:",name);
      
    function handleUndo(){
      const varUndo=undo(name)
      console.log(varUndo);
    }

  return (
    <div>
        <input type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border"
        />
        <button onClick={handleUndo}>Undo</button>
    </div>
  )
}
