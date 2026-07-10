import { usePrevState } from "../hooks/self-hook/usePrevState"

export const PrevState = () => {
    const [state,setState,getPrevState]=usePrevState(0);

  return (
    <div>
        <h1>state:{state}</h1>
        <button onClick={()=>setState(prev=>++prev)}>setState</button><br />
        <button onClick={()=>getPrevState()}>prevState</button>
    </div>
  )
}
