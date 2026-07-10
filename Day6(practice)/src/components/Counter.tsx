import { useStore } from "../hooks/useStore"
import {increment,decrement,reset} from '../features/counterSlice'

export const Counter = () => {
  const {useAppselector,useAppDispatch}=useStore();
  const {count,btnClicked}=useAppselector(store=>store.counter);
  const dispatch=useAppDispatch();

  return (
    <div>
      <h1>COUNT:{count}</h1>
      <h2>number of time btn clicked:{btnClicked}</h2>
      <button className="border" onClick={()=>dispatch(increment())}>IncrementByValue</button><br />
      <button className="border" onClick={()=>dispatch(decrement(5))}>decreaseBy5</button><br />
      <button className="border" onClick={()=>dispatch(reset())}>Reset</button><br />
    </div>
  )
}
