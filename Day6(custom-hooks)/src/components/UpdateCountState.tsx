import { useUpdateCountState } from "../hooks/mentor-hooks/useUpdateCountState"

export const  UpdateCountState= () => {
const [state,setState,count]=useUpdateCountState(100)
// works exactly like useState but this gives back how many time state has been updated.
  return (
    <div>
        <h1>State:{state}</h1>
        <h2>how many times state updated:{count}</h2>
        <button onClick={()=>{setState(prev=>prev+1)}}>increaseState</button>
        <button onClick={()=>{setState(prev=>prev-1)}}>decreaseState</button>
    </div>
  )
}
