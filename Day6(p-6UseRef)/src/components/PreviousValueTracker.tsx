import { usePreviousValueTracker } from "../hooks/usePreviousValueTracker"

export const PreviousValueTracker = () => {
    const [current,setCurrent,prev]=usePreviousValueTracker();
  return (
    <div>
        <h1>Current:{current}</h1>
        <h2>Previous:{prev}</h2>
        <button onClick={()=>setCurrent(prev=>prev+1)}>Increase</button>
    </div>
  )
}
