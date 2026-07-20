/*
import { useEffect, useImperativeHandle, useRef, useState, type RefObject } from "react";

interface ProgressBarHandle {
  start: () => void;
  pause: () => void;
  reset: () => void;
}

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
*/

import { useImperativeHandle, useRef, useState } from "react"
import type { ProgressBarHandle } from "./ShowProgress"

type ProgressBarProps={
  ref:React.RefObject<ProgressBarHandle | null>
  durationMs:number
}

export const ProgressBar = ({ref,durationMs}:ProgressBarProps) => {
  const timerRef=useRef(0);
  const [progress,setProgress]=useState(0);

  useImperativeHandle(ref,()=>({
    start(){
      if(timerRef.current) return;
      timerRef.current=setInterval(()=>{
        setProgress(prev=>{
          if(prev===100){
            clearInterval(timerRef.current);
            return prev;
          }
          return prev+1;
        })
      },durationMs/100)
    },
    pause(){
      clearInterval(timerRef.current);
      timerRef.current=0;
    },
    reset(){
      setProgress(0);
      clearInterval(timerRef.current);
      timerRef.current=0;
    },
    restart(){
      setProgress(0);
      clearInterval(timerRef.current);
      timerRef.current=0;
      this.start();
    },
  }))

  return (
    <div className="h-5 w-50 border">
      <div className={`h-5 bg-green-300`}
        style={{width:`${progress}%`}}
      >

      </div>
    </div>
  )
}
