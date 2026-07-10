/*
import { useRef, useState } from "react"

export const usePagination = ({ data, pagesize}:{ data:number[], pagesize:number}) => {
    const [startIndex, setStartIndex] = useState(0);
    const [pageSize,setPageSize]=useState(pagesize);
    const [canGoNext,setCanGoNext]=useState(true);
    const [canGoPrevious,setCanGoPrevious]=useState(!canGoNext);
    const currentPage=useRef(1)
    const paginatedData=data.slice(startIndex,startIndex+pageSize);

    console.log(canGoNext);
    console.log(canGoPrevious);
    
    const totalPages=Math.ceil(data.length/pageSize);
    console.log('-->',totalPages);
    

    function next(){
        if(data.length<=startIndex+pageSize){
            setCanGoNext(false);
            return;
        }
        setStartIndex(startIndex+pageSize);
        setCanGoPrevious(true);
        ++currentPage.current;
    }
    function previous(){
        if(startIndex-pageSize<=-1){
            setCanGoPrevious(false);
            return;
        }
        setStartIndex(startIndex-pageSize);
        setCanGoNext(true);
        --currentPage.current;
    }

    return {paginatedData,currentPage,next,previous,totalPages,canGoNext,canGoPrevious,setPageSize}
}
*/

import { useState } from "react"


type UsePaginationProps<T>={
    data:T[],
    pagesize:number,
}

export const usePagination = <T,>({data,pagesize}:UsePaginationProps<T>) => {
    const [startIndex,setStartIndex]=useState(0);
    const [pageSize,setPageSize]=useState(pagesize);

    const paginatedData=data.slice(startIndex,startIndex+pageSize);
    const canGoNext=data.length>startIndex+pageSize;
    const canGoPrevious=startIndex-pagesize>-1;
    const totalPages=data.length/pagesize;
    const currentPage=Math.ceil((startIndex/pageSize))+1;

    function next(){
        if(!canGoNext){
            return;
        }
        setStartIndex(prev=>prev+pagesize)
    }
    function previous(){
        if(!canGoPrevious){
            return;
        }
        setStartIndex(prev=>prev-pagesize)
    }

  return {paginatedData,currentPage,next,previous,totalPages,pageSize,setPageSize,canGoNext,canGoPrevious}
}

