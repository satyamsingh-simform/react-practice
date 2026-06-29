import { useEffect, useRef, useState } from "react";

export const Progress = () => {
  const [progress, setProgress] = useState(0);
  const timer=useRef(0);

  useEffect(()=>{
    if(progress===100){
        clearInterval(timer.current);
        return;
    }
    timer.current=setInterval(()=>{
        setProgress(progress=>progress+1)
    },100)
    
    return()=>{
        clearInterval(timer.current)
    }
  },[progress])

  return(
    <div className="h-screen flex justify-center items-center w">
        <p className="w-100 rounded-3xl border ">
            <p style={{width:`${progress}%`}} className="bg-green-400 rounded-3xl">{progress}</p>
        </p>
    </div>
  )
};
