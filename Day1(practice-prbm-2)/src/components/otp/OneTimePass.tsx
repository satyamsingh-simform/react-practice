import { useRef } from "react";

export const OneTimePass = () => {
    const refs=useRef<any>([]);

    function handleChange(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>,index:number){
        if(e.target.value.length==1){
            refs.current[index+1]?.focus()
        }
    }
  return ( 
    <div className="h-screen flex justify-center items-center">
        {
            [0,1,2,3].map((val,index)=>(
                <div  key={index} >
                    <input className="text-3xl text-center flex border h-15 w-15"
                        key={index}
                        maxLength={1}
                        ref={(element)=>{refs.current[index]=element}}
                        onChange={(e)=>handleChange(e,index)}
                    />
                </div>
            ))
        }
    </div>
  )
}
