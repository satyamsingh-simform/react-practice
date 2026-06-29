import { useState } from "react"

export default function useToggleSelection(){
    const [selected,setSelected]=useState(['']);

    function handleSelected(fruit:string){
        if(selected.includes(fruit)){
            console.log('true');
            const arrFilter=selected.filter((fru)=>fru!==fruit);
            console.log('-->',arrFilter);
            setSelected(arrFilter);
            return;
        }
        console.log(fruit);
        setSelected((prev)=>[fruit,...prev]);
    }

    return{handleSelected, selected}
}