import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreType"
import { fetchData } from "../features/productSlice";
import { Footer } from "./Footer";

export const ShowProduct = () => {
    const [input,setInput]=useState('');
    const inputRef=useRef<HTMLInputElement>(null);
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
        if(!input){
            console.log('input',input);
            dispatch(fetchData(''));
            return;
        }
        dispatch(fetchData(input));
            console.log('input-->',input);
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
            ref={inputRef}
            onChange={(e)=>{
                setInput(e.target.value);
                debounce(()=>{
                    handleChange();
                },500)

            }}
            value={input}
        />
        <button >move to bottom</button>

        <div className=" flex flex-wrap gap-5 mt-5">
            {   
                loading?'loading...':
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

        <Footer ref={inputRef}/>
    </div>
  )
}
