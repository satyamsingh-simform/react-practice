import { useDefault } from "../hooks/useDefault"

export const Default = () => {
// const [state, setState] = useDefault(initalValue, defaultValue);
    const[state, setState]=useDefault(null,0);
  return (
    <div>
        <h1>state:{state}</h1> <br />
        <button onClick={()=>setState(null)}>setSatateNull</button> <br />
        <button onClick={()=>setState(100)}>setSatateNumber</button> <br />
        <button onClick={()=>setState(prev=>prev!+1)}>setStateWithCallbackFn</button>
    </div>
  )
}
