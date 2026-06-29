import { useReducer } from "react"

function reducer(state:number,action:{type:"increment"|"decrement"|"reset"}){
    switch(action.type){
        case 'increment':return ++state
        case 'decrement':return --state
        case 'reset':return 0
        default:return state;
    }
}

export const Reducer = () => {
    const [count,dispatch]=useReducer(reducer,0)
    return (
      <div>
            <h1>COUNT:{count}</h1>
            <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
      </div>
    )
}
