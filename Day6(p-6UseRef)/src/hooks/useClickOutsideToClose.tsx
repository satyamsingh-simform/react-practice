import { useEffect, useState } from "react"

export const useClickOutsideToClose = (initialVal:boolean) => {
  const [open,setOpen]=useState(initialVal);

  useEffect(()=>{
    function handleClick(e:PointerEvent){
      console.log('handleclicked called',(e.target as HTMLElement).tagName);
      
      if((e.target as HTMLElement).tagName==="HTML"){
        setOpen(false);
      }
    }

    window.addEventListener('click',handleClick);

    return()=>{
      window.removeEventListener('click',handleClick)
    }

  },[])

  return [open,setOpen] as const
}
