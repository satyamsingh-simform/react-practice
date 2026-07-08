import { useEffect } from "react"

export const useKeyBoardShortcut = ({key, ctrl, shift, onKey}:{key:string,ctrl:boolean,shift:boolean,onKey:()=>void}) => {

    useEffect(()=>{
        function handleKeyHit(e:KeyboardEvent){
            if(e.key===key && ctrl===true && shift===true){
                onKey();
            }
        }
        addEventListener('keydown',handleKeyHit)
        
        return ()=>{
            removeEventListener('keydown',handleKeyHit)
        }

    },[])

  return (
    <div>
        
    </div>
  )
}
