import { useState } from "react";

type GymProps = {
  attendence: number[];
};

export default function GymAttendenceGym({ attendence }: GymProps) {
  const [startIndex, setStartIndex] = useState(0);

//   const maxVal = Math.max(...attendence);

  console.log("start:", startIndex);
  console.log("length:", attendence.length);

  function handleNext() {
    if (startIndex + 8 > attendence.length) {
      return;
    }
    setStartIndex((startIndex) => startIndex + 1);
  }
  function handlePrev() {
    if (startIndex <= 0) {
      return;
    }
    setStartIndex((startIndex) => startIndex - 1);
  }

/*Array,Array.from
  const arr=Array.from({length:5},((_,index)=>index));
  console.log('arr:',arr);
  const arr2=Array(5);
  console.log('arr2:',[...arr2]);
*/  

  return (
    <>
      <div className="chart-div">
        {attendence.slice(startIndex, 6 + startIndex).map((data) => (
          // <div className="data-container">
          //     <div style={{height:`${data/maxVal*500}px`}} key={`${data}-${index}`} className="attend-data">

          //     </div>
          //     <span>{data}</span>
          // </div>
          <div>
            {
                [...Array(data)].map((_,index)=>(
                    <div key={index} className="square-box">
                       
                    </div>
                ))
            }
            <span>{data}</span>
          </div>
        ))}
      </div>
      <div>
        <button disabled={startIndex <= 0} onClick={handlePrev}>
          previous
        </button>
        <button
          disabled={startIndex + 7 >= attendence.length ? true : false}
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </>
  );
}

/*
import { useState } from "react";

type GymProps={
    attendence:number[]
}

let arr=[];

export default function GymAttendenceGym(props:GymProps){
    const [startIndex, setStartIndex]=useState(0);

    let attendence=props.attendence;
    let modData:number[]=[];

    console.log('start:',startIndex);
    console.log('length:',attendence.length);

    for(let i=startIndex;i<startIndex+7;i++){
        modData[i]=attendence[i];
    }
    

    function handleNext(){
        // console.log(startIndex+7);
        // console.log(attendence.length);
        if(startIndex+8>attendence.length){
            // console.log(startIndex+8);
            return;
        }
        setStartIndex(startIndex=>startIndex+1);
    }
    function handlePrev(){
        if(startIndex<=0){
            return
        }
        setStartIndex(startIndex=>startIndex-1);
    }

  return(
    <>
    
    <div className="chart-div">
        <ul>
            {
                modData.map((data, index)=>(
                    <>
                    <div key={`${data}-${index}`} className="data-div" style={{height:`${(data*100)}%`}}>
                        <li>{data}</li>
                        {arr.length=data}
                        
                    </div>
                    <div className="chart">
                        {
                            arr.map((_,index)=>(
                                <div className="chart">{index}</div>
                            ))
                        }
                    </div>
                    </>
                    
                ))
            }
        </ul>
    </div>
    <div>
        <button
            disabled={startIndex<=0}
            onClick={handlePrev}>previous</button>
        <button 
            disabled={startIndex+7>=attendence.length?true:false} 
            onClick={handleNext} >next
        </button>
    </div>
    </>
  )
}
*/
