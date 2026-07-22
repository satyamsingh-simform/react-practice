/*
import type { ReactNode } from "react"

type CustomSelectProps=React.SelectHTMLAttributes<HTMLSelectElement>&{
    children:ReactNode,
}

export const CustomSelect = ({children,...props}:CustomSelectProps) => {

  return (
    <select name="" id="" 
        {...props}
    
    >
        {children}
    </select>
  )
}
*/

import { useEffect, useRef, useState } from "react"


type Option={
  label:string,
  value:string,
}

type CustomSelectProps={
  options:Option[],
  value:Option['value'],
  onChange:(val:string)=>void,
  disabled:boolean,
}

export const CustomSelect = ({options,value,disabled,onChange}:CustomSelectProps) => {
  const [open,setOpen]=useState(false);
  const divRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    function handleOutsideClick(e: PointerEvent){
      // if((e.target as HTMLElement).tagName==='HTML'){
      //   setOpen(false)
      // }

      if(divRef.current && !divRef.current.contains(e.target as Node)){
        setOpen(false)
      }
    }
    window.addEventListener('click',handleOutsideClick);

    return()=>{
      window.removeEventListener('click',handleOutsideClick)
    }
  },[])

  return (
    <div className="m-10 border"
      ref={divRef}
      style={{pointerEvents:disabled?'none':'all'}}
    >
        <div className="border h-7" 
          onClick={()=>setOpen(prev=>!prev)}
        >
        {value?value:'select...'}
        </div>
      {
        open?
        options.map((obj)=>(
          <div key={obj.label} className="border w-50 "
            onClick={()=>{
              onChange(obj.value)
              setOpen(false)
            }}
          >{obj.label}</div>
        ))
        :''
      }
    </div>
  )
}
