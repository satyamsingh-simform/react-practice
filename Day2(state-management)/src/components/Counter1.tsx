import { useDispatch, useSelector } from "react-redux"
import type { AppStore, DispatchType } from "../store"
import {increment,decrement,reset} from "../feature/counter1Slice/Count1Slice"

export const Counter1 = () => {
  const {count}=useSelector((store:AppStore)=>store.counter)
  const dispatch=useDispatch<DispatchType>();

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
