import { useEffect, useState } from "react";

export default function useWindowSize(){
    const [size,setSize]=useState({
        height:window.innerHeight,
        width:window.innerWidth,
    })

    useEffect(()=>{
        function handleChange(){
            setSize({
                height:window.innerHeight,
                width:window.innerWidth,
            })
        }
        window.addEventListener('resize',handleChange)

        return()=>{
            console.log('I ran');
            window.removeEventListener('resize',handleChange)
        }
    },[])

    return size;
}