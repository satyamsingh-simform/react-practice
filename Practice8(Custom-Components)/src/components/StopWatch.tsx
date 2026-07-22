import { useRef, useState } from "react";

export default function Stopwatch() {
    const [time,setTime]=useState(0);
    const timerRef=useRef(0);
    const isStop=useRef(false);

    function start(){
        if(timerRef.current!==0)return;
        if(isStop.current){
            setTime(0);
            timerRef.current=setInterval(()=>{
                setTime(prev=>prev+1);
            },1000)
            return;
        }
        timerRef.current=setInterval(()=>{
            setTime(prev=>prev+1);
        },1000)
    }
    function pause(){
        clearInterval(timerRef.current);
        timerRef.current=0;
    }

    function reset(){
        setTime(0);
        clearInterval(timerRef.current);
        timerRef.current=0;
    }

    function stop(){
        clearInterval(timerRef.current);
        timerRef.current=0;
        isStop.current=true;
    }

  return (
    <div className="flex flex-col ">
      <p>{time}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pause}>Pause</button> 
    </div>
  );
}