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
        if(data.length<startIndex+pageSize){
            console.log('hi');
            
            return;
        }
        setStartIndex(prev=>prev+pageSize);
    }
    function previous(){
        if(data.length>pageSize){
            return
        }
        setStartIndex(prev=>prev-pageSize);
    }

  return {currentPage,next,previous}
}
