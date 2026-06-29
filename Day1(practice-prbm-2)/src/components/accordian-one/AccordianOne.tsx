import { useState } from "react"
import { questions } from "../../utils/data"

export default function AccordianOne(){
    const [openId,setOpenId]=useState(1);
    
    function handleOpenOne(id:number){
        if(openId===id){
            setOpenId(0);
            return;
        }
        setOpenId(id);
    }

    return(
        <div>
            {
                questions.map((obj)=>(
                    <div key={obj.id}>
                    {
                        openId===obj.id
                        ?
                            <div key={obj.id} className={`data-${obj.id}`}
                                onClick={()=>handleOpenOne(obj.id)}
                            >
                                <span>{obj.question}</span>
                                <span>{obj.answer}</span>
                            </div>
                        :
                             <div key={obj.id} className={`data-${obj.id}`}
                                onClick={()=>handleOpenOne(obj.id)}
                             >
                                <span>{obj.question}</span>
                            </div>

                    }
                    </div>
                ))
            }
        </div>
    )
}