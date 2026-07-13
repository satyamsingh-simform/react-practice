import { useEffect, useRef } from "react"

export const InputFocus = () => {
    const inputRef=useRef<HTMLInputElement[]>([]);

    function handleFocus(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>,index:number){
        if(e.target.value.length===1){
            inputRef.current[index+1]?.focus();
        }
    }

    useEffect(()=>{
        inputRef.current[0].focus();
    },[])

  return (
    <div className="flex">
        {
            Array.from({length:4}).map((_,index)=>(
                <div key={index}>
                    <input type="text" maxLength={1} 
                        ref={(e)=>{inputRef.current[index]=e!}}
                        onChange={(e)=>handleFocus(e,index)}
                        className="w-20 h-20 border"
                    />
                </div>
            ))
        }
    </div>
  )
}
