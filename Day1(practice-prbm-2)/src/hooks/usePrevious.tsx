import { useEffect, useRef } from "react";

export default function usePrevious(count:number){
    // const [prevCount,setPrevCount]=useState<number|undefined>();
    const prevCount= useRef<number>(undefined)
    useEffect(()=>{
        prevCount.current=count;
    },[count])

    return prevCount.current;
}