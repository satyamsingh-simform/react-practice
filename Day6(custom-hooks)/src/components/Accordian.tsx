import { useState } from "react";
import { AccordianData } from "./AccordianData"

export const questions=[
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library.",
  },
  {
    id: 2,
    question: "What is TypeScript?",
    answer: "TypeScript is a typed superset of JavaScript.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX allows writing HTML inside JavaScript.",
  },
];

export const Accordian = () => {
    const [open,setOpen]=useState<number>()
    
  return (
    <div className="mt-10">
        {
            questions.map((obj)=>(
                <AccordianData key={obj.id} obj={obj} open={open} setOpen={setOpen}/>
            ))
        }
    </div>
  )
}
