import { useState } from "react";

type PaginationProps={
    data:number[],
    pageSize:number,
}

export const usePagination = ({data,pageSize}:PaginationProps) => {
    const [startIndex,setStartIndex]=useState(0);
    const currentPage=data.slice(startIndex,startIndex+pageSize);

    console.log(data);

    function next(){
        if(startIndex+pageSize>=data.length){
            return;
        }
        setStartIndex(prev=>prev+pageSize)
    }
    function previous(){
        if(startIndex<=0){
            return;
        }
        setStartIndex(prev=>prev-pageSize)
    }

  return {currentPage,next,previous}
}
