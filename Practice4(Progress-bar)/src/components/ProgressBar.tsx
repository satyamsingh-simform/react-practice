import { useEffect, useImperativeHandle, useRef, useState, type RefObject } from "react";

interface ProgressBarHandle {
  start: () => void;
  pause: () => void;
  reset: () => void;
}
// export const Demo: React.FC = () => {
//   const barRef = React.useRef<ProgressBarHandle>(null);

//   return (
//     <div>
//       <ProgressBar ref={barRef} durationMs={4000} />
//       <button onClick={() => barRef.current?.start()}>Start</button>
//       <button onClick={() => barRef.current?.pause()}>Pause</button>
//       <button onClick={() => barRef.current?.reset()}>Reset</button>
//     </div>
//   );
// };


type ProgressBarProps={
  ref:RefObject<ProgressBarHandle | null>,
  durationMs:number,
}

export const ProgressBar = ({ref,durationMs}:ProgressBarProps) => {
  const timerRef=useRef(0);
  const [progress,setProgress]=useState(0);

  useImperativeHandle(ref,()=>({
    start(){
    if(timerRef.current!==0) return;
    timerRef.current=setInterval(()=>{
      setProgress((prev)=>{
        if(prev===100){
          clearInterval(timerRef.current);
          timerRef.current=0;
          return prev;
        }
        return prev+1;
      });
    },durationMs/100)
  },

  pause(){
    clearInterval(timerRef.current);
    timerRef.current=0;
  }
  ,
  reset(){
      setProgress(0);
      clearInterval(timerRef.current);
      timerRef.current=0;
  }
  }))


  return (
    <div className="w-96 border h-6 rounded">
      <div
        className="bg-green-500 h-full transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
