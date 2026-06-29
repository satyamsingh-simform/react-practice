import { useState } from "react";

type DaysSyncProps={
    attendance:number[],
}

export const DaysSync = ({attendance}:DaysSyncProps) => {
    const [startIndex,setStartIndex]=useState(0);
    console.log(attendance);

    function handleNext(){
        if(startIndex+7>=attendance.length) return;
        setStartIndex(prev=>prev+1);
    }
    function handlePrev(){
        if(startIndex<=0) return;
        setStartIndex(prev=>prev-1);
    }

    return (
        <>
        <div>
            {
                attendance.slice(startIndex,7+startIndex).map((data,index)=>(
                    <div key={data}>
                        {'Day'+`${index+1}`}--{data}
                    </div>
                ))
            }
      </div>
      <div>
        <button disabled={startIndex<=0} onClick={handlePrev}>prev</button>
        <button disabled={startIndex+7>=attendance.length} onClick={handleNext}>next</button>
      </div>
        </>
      
    )
}

