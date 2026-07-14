import { useEffect, useState } from "react"

export const DocumentTitleManager = () => {
    const [title,setTitle]=useState('');

    // document.title=title;

    useEffect(()=>{
        document.title=title;
    },[title])

  return (
    <div>
        <input type="text" className="border" placeholder="enter"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
        />
    </div>
  )
}
