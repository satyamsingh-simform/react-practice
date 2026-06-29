import { useState } from "react"

type ToggleSelectionProps={
    fruits:string[],
}

export const TrackElement=({fruits}:ToggleSelectionProps) => {
    const [selected,setSelected]=useState([])
    console.log(selected);
    
    function handleSelected(e){
        let newVal:string=e.target.textContent;

        if(selected.includes(newVal)){
            console.log('duplicate value');
            const uniqueVal=selected.filter((val)=>!(val===newVal));
            console.log('-->',uniqueVal);
            setSelected([...uniqueVal])
            return;
        }
        console.log(e.target.textContent);
        setSelected([...selected,newVal])
    }

  return (
    <div>
        {
            fruits.map((fruit,index)=>(
                <div key={fruit} onClick={handleSelected}>
                    <span>{fruit}</span>
                    <span>{selected.includes(fruit)?'[x]':'[ ]'}</span>
                </div>
            ))
        }

    </div>
  )
}
