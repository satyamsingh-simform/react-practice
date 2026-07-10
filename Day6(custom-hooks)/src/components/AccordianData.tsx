import { useState, type SetStateAction } from "react";

type AccordianDataProps = {
  obj: {
    id: number;
    question: string;
    answer: string;
  },
  open:number[],
  setOpen:React.Dispatch<React.SetStateAction<number[]>>,
};



export const AccordianData = ({ obj,open,setOpen }: AccordianDataProps,) => {

  return (
    <div onClick={()=>handleClick(obj.id)}>
      {open ? (
        <div className="border w-[50%] m-auto p-5">
          <h1>{obj.question}</h1>
          <p>{obj.answer}</p>
        </div>
      ) : (
        <div className="border w-[50%] m-auto p-5">
          <h1>{obj.question}</h1>

        </div>
      )}
    </div>
  );
};
