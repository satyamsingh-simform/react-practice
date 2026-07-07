import { useRef, useState } from "react";

export const useCountdown = (initial: number) => {
  const [timeLeft, setTimeLeft] = useState(initial);
  const [isFinished, setIsFinished] = useState(false);

  const timerRef = useRef(0);
  const isRunning = !isFinished;

  function start() {
    if (timerRef.current != 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prevtime) => {
        if (prevtime === 0) {
          setIsFinished(true);
          clearInterval(timerRef.current);
          return prevtime
        }
        return prevtime-1;
      });
    }, 1000);
  }

  function reset(){
    setTimeLeft(initial);
    clearInterval(timerRef.current);
  }

  function pause(){
    clearInterval(timerRef.current);
    timerRef.current = 0;
  }

  function resume(){
    start();
  }

  return { start,reset,pause,resume,timeLeft, isFinished, isRunning };
};
