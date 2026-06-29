import { questions } from "../../utils/data";
import AccordianCard from "./AccordianCard";

export default function Accordian(){
    return(
        <div className="question">
            {
                questions.map((obj)=>(
                    <AccordianCard key={obj.id} obj={obj}/>
                ))
            }
        </div>
    )
}