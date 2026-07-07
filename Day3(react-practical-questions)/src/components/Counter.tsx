import { useStore } from "../hooks/useStore"
import {increment,decrementBy5,reset} from '../features/counterSlice'

export const Counter = () => {
    const {useAppSelector, useAppDispatch}=useStore();
    const {count}=useAppSelector((store)=>store.counter);
    const dispatch= useAppDispatch();

  return (
    <div>
        <h1>COUNT:{count}</h1>
        <button className="border m-5" onClick={()=>dispatch(increment())}>IncCount</button>
        <button className="border m-5" onClick={()=>dispatch(decrementBy5(5))}>DecBy5</button>
        <button className="border m-5" onClick={()=>dispatch(reset())}>ResetCount</button>
    </div>
  )
}
