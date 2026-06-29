import { useRef, useState } from "react"

export const OneTimePassGen = () => {
    const [length,setlength]=useState(4);
    const inputRef=useRef<HTMLInputElement[]>([])

    function handleFocus(val:string,index:number){
        if(val.length===1){
            inputRef.current[index+1].focus();
        }
        if(val.length===0){
            inputRef.current[index-1].focus();
        }
    }

    function handleKey(e:React.KeyboardEvent<HTMLInputElement>,index:number){
        console.log(e.code);
        if(e.code==='ArrowLeft'){
            inputRef.current[index-1].focus();
        }
        if(e.code==='ArrowRight'){
            inputRef.current[index+1].focus();
        }
    }
    
  return (
    <div className="flex flex-col items-center gap-5">
        <div>
            {
            Array.from({length:length}).map((_,index)=>(
                <input key={index} 
                    type="text" 
                    maxLength={1}
                    className="border h-5 w-5"
                    ref={(el)=>{inputRef.current[index]=el!}}
                    onChange={(e)=>handleFocus(e.target.value, index)}
                    onKeyDown={(e)=>handleKey(e,index)}
                />
            ))
            }
        </div>
        <input type="text"
            value={length}
            onChange={(e)=>{setlength(Number(e.target.value))}}
            className="border"
        /> <br />
    </div>
  )
}
