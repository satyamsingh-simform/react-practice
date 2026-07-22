import { useState } from "react";

type CustomInputProps=React.InputHTMLAttributes<HTMLInputElement>&{

}

export const CustomInput = ({value,onChange,defaultValue='',...props}:CustomInputProps) => {
    const[internalVal,setInternalVal]=useState(defaultValue as string);
    const isControlled=value!==undefined;

    function handleChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        if(!isControlled){
            setInternalVal(e.target.value);
            // return;
        }
        onChange?.(e)
    }

  return (
    <input className="border"
        value={isControlled?value:internalVal}
        onChange={handleChange}
        type="text" 
        {...props}
    />
  )
}
