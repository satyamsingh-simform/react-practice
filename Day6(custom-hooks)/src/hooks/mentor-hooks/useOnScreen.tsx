// import { useEffect, useState, type RefObject } from "react";
/*
import { useEffect, useState, type RefObject } from "react";

export const useOnScreen = <T extends Element,>(divRef: RefObject<T | null>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!divRef.current) return;

    console.log(divRef);

    const observer = new IntersectionObserver((param) => {
      console.log(param);
      setIsVisible(param[0].isIntersecting);
    });

    observer.observe(divRef.current);

    return(()=>{
        observer.unobserve(divRef.current!)
    })

  }, [divRef]);

  return isVisible;
};
*/

import { useEffect, useState, type RefObject } from "react"

export const useOnScreen = <T extends Element,>(ref:RefObject<T|null>) => {
  const [isVisible,setIsVisible]=useState(false);

  useEffect(()=>{
    const el=ref.current;
    if(!el) return;

    const observer=new IntersectionObserver((param)=>{
      console.log(param);
      setIsVisible(param[0].isIntersecting)
    })

    observer.observe(el);

    return()=>{
      console.log('unobserve');
      observer.unobserve(el)
    }

  },[ref])

  return isVisible
}
