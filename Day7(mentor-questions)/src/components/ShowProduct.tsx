import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreType"
import { fetchData } from "../features/productSlice";

export const ShowProduct = () => {
    const [input,setInput]=useState('');
    const timerRef=useRef(0);
    const {mobiles,loading,error}=useAppSelector(store=>store.phone);
    const dispatch=useAppDispatch();

    console.log('mob',mobiles);
    
    // useEffect(()=>{
    //     console.log('called');
    //     if(!input)return;
    //     dispatch(fetchData(input));
    // },[input])

    function handleChange(){
        dispatch(fetchData(input));
    }

    function debounce(callback:()=>void,timer:number){
        clearTimeout(timerRef.current);
        timerRef.current=setTimeout(()=>{
            callback();
        },timer)
    }

    if(error){
        return <h1>Error occured</h1>
    }

  return (
    <div>
        <input type="text" placeholder="enter product name" className="border"
            onChange={(e)=>{
                setInput(e.target.value);
                debounce(()=>{
                    handleChange();
                },500)

            }}
            value={input}
        />

        <div className=" flex flex-wrap gap-5 mt-5">
            {   
                loading?'':
                mobiles?.map((mobileObj)=>(
                    <div key={mobileObj.id} className="w-60 h-90 rounded-lg ring-1 ring-gray-200 p-4 flex flex-col items-center ">
                        <img src={mobileObj.thumbnail} alt={mobileObj.title} />
                        <div>{mobileObj.title}</div>
                        <div>{mobileObj.price}</div>
                        <div>{mobileObj.category}</div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
