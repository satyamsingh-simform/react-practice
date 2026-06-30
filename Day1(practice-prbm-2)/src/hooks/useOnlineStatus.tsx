import { useEffect, useState } from "react"

export default function useOnlineStatus(){
    const [onlineStatus,setOnlineStatus]=useState(navigator.onLine);

    useEffect(()=>{
        function handleOnline(){
            setOnlineStatus(true)
        }
        function handleOffline(){
            setOnlineStatus(false)
        }

        window.addEventListener('offline',handleOffline);
        window.addEventListener('online',handleOnline);

        return ()=>{
            window.removeEventListener('offline',handleOffline);
            window.removeEventListener('online',handleOnline);
        }
    },[])
    

    return onlineStatus;
}

