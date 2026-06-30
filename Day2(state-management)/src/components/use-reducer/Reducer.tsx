import { useReducer } from "react"

type Action={type:'increment'}|{type:'decrement'}|{type:'reset'}

function reducer(state:number,actions:Action){
    switch(actions.type){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1;
        case 'reset':
            return state=0;
        default: return state;
    }
}

export const Reducer = () => {
    const [count,dispatch]=useReducer(reducer,0)
  return (
    <div>
        <button onClick={()=>{dispatch({type:'increment'})}}>Count:{count}</button>
        <button onClick={()=>{dispatch({type:'decrement'})}}>Count:{count}</button>
        <button onClick={()=>{dispatch({type:'reset'})}}>Count:{count}</button>
    </div>
  )
}
