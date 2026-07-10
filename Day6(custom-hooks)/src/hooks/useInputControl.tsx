
// hook that manages input 
//  const {value,onChange,onBlur,isDirty,isTouched, isDifferent, reset} = useInputControl('Oliver');

import { useState } from "react"


export const useInputControl = (initialVal:string) => {
    const[value,setValue]=useState(initialVal);
    const[isDirty,setIsDirty]=useState(false);
    const[isTouched,setIsTouched]=useState(false);

    const isDifferent=value===initialVal?false:true;

    function onChange(e:string){
        console.log(e);
        setValue(e);
        setIsDirty(true);
    }

    function reset(){
        setValue('');
        setIsDirty(false);
        setIsTouched(false);
    }

    function onBlur(){
        setIsTouched(true);
    }




  return {value,isTouched,isDirty,isDifferent,onChange,reset,onBlur}
}
