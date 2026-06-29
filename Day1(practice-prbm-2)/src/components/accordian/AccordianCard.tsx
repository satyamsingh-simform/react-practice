import { useState } from "react";
import type { questions } from "../../utils/data";

type AccordianCardProps = {
  obj: (typeof questions)[number];
};

export default function AccordianCard({ obj }: AccordianCardProps){
    const [open,setOpen]=useState(false);

    function handleToggle(){
        setOpen(prev=>!prev)
    }

    return(
        <div key={obj.id} className={`data-${obj.id}`}>
            {
                open?
                    <span onClick={handleToggle}>
                        <div>Q.{obj.question}</div>
                        <div>---ans: {obj.answer}</div>
                    </span>
                    :
                    <span onClick={handleToggle}>{obj.question}</span>
            }
        </div>
    );
}


