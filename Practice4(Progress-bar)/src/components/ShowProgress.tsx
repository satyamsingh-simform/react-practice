import { useRef } from "react"
import { ProgressBar } from "./ProgressBar"

interface ProgressBarHandle {
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export const ShowProgress = () => {
    const barRef=useRef<ProgressBarHandle>(null);
  return (
    <div>
       <ProgressBar ref={barRef} durationMs={4000} />
       <button onClick={() => barRef.current?.start()}>Start</button>
       <button onClick={() => barRef.current?.pause()}>Pause</button>
       <button onClick={() => barRef.current?.reset()}>Reset</button>
     </div>
  )
}
