import { useEffect, useRef, useState } from "react"

type Option={
    id:number,
    label:string,
    value:string,
}

type MultiSelectProps={
    options:Option[],
    multiple?:boolean
}

export const MultiSelect = ({options,multiple=false}:MultiSelectProps) => {
    const [optionSelected,setOptionSelected]=useState<Option[]>([]);
    const selectRef=useRef<HTMLDivElement>(null);
    const [isOpen,setIsOpen]=useState(false);

    useEffect(()=>{
        function handleClickOutside(e:PointerEvent){
            if(selectRef.current && !selectRef.current.contains(e.target as Node )){
                setIsOpen(false)
            }
        }
        window.addEventListener('click',handleClickOutside)

        return()=>{
            window.removeEventListener('click',handleClickOutside)
        }
    },[])

    function handleRemove(id:number){
        const filteredOption=optionSelected.filter((obj)=>obj.id!==id);
        setOptionSelected(filteredOption);
    }

  return (
    <div className="m-20 border"
        ref={selectRef}
    >
        <div className="border w-[50%] mb-2 p-1 flex flex-wrap gap-1 justify-between"
            onClick={()=>setIsOpen(prev=>!prev)}
        >
            <div>
                {
                optionSelected.length===0?'select...':optionSelected.map((obj)=>(
                    <span key={obj.id}
                        className="mr-3 bg-green-400 p-1 rounded"
                    >
                        {obj.value}
                        <button className="ml-2"
                            onClick={()=>handleRemove(obj.id)}
                        >X</button>
                    </span>
                ))
                }
            </div>
            
            <span className="text-2xl font-extrabold">
                {
                    isOpen?"↓":"↑"
                }
            </span>
        </div>
        {
            isOpen?
            options.map((optionObj)=>{
                const selected=optionSelected.some((obj)=>obj.id===optionObj.id);
                console.log('-->',selected);
                
                return(<div key={optionObj.id} className="border w-[50%]"
                    style={{backgroundColor:selected?"green":"white"}}
                    onClick={()=>setOptionSelected((prev)=>{
                        if(!multiple){
                            return [optionObj];
                        }
                        if(prev.some((obj)=>obj.id===optionObj.id)){
                            const filtered=prev.filter((obj)=>obj.id!==optionObj.id);
                            return filtered;
                        }
                        return [...prev,optionObj]
                    })}

                >{optionObj.label}
                </div>)
            })
            :''
        }
    </div>
  )
}
