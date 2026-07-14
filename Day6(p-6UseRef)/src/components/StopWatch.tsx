
/*
Practical 4. Stopwatch
(Estimated time: 45 to 60 minutes)
 
Requirements:
Start timer.
Pause timer.
Resume timer.
Reset timer.
Prevent multiple timers from running simultaneously.
Expected concepts:
useRef
useEffect
Interval cleanup
*/

import { useEffect, useRef, useState } from "react"


export const StopWatch = () => {
    const [time,setTime]=useState(0);
    const timerRef=useRef<number>(null);

    function handleStartTimer(){
        if(timerRef.current){
            console.log('handleresiume');
            return;
        }
        timerRef.current=setInterval(()=>{
            setTime(prev=>prev+1);
        },1000)
    }

    function handlePauseTimer(){
        if(timerRef.current){
            clearInterval(timerRef.current);
            timerRef.current=null;
        }
    }

    function handleResumeTimer(){
        if(timerRef.current) return;
       handleStartTimer();
    }

    function handleResetTimer(){
        if(timerRef.current){
            clearInterval(timerRef.current);
        }
        setTime(0);
    }

    useEffect(()=>{
        return()=>{
            if(timerRef.current){
                clearInterval(timerRef.current);
                timerRef.current=null;
            }
        }
    },[])

  return (
    <div>
        <h1>Time:{time}</h1>
        <button onClick={handleStartTimer}>Start</button><br />
        <button onClick={handlePauseTimer}>Pause</button><br />
        <button onClick={handleResumeTimer}>Resume</button><br />
        <button onClick={handleResetTimer}>Reset</button><br />
    </div>
  )
}
