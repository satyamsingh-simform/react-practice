import { useState } from "react"

export default function usePagination(data:string[], itemsPerPage:number) {
    const [startIndex,setStartIndex]=useState(0)
    
    const currentItems=data.slice(startIndex,startIndex+itemsPerPage)
    console.log(currentItems);
    
    function nextPage(){
        if(startIndex+itemsPerPage>=data.length){
            return;
        }
        setStartIndex(prev=>prev+itemsPerPage)
    }
    function prevPage(){
        if(startIndex<=0){
            return;
        }
        setStartIndex(prev=>prev-itemsPerPage)
    }

    return{currentItems,nextPage, prevPage}
}

