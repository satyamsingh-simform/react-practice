import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreType"
import { fetchData } from "../features/productSlice";

export const ShowProduct = () => {
    const [input,setInput]=useState('');
    const {mobiles,loading,error}=useAppSelector(store=>store.phone);
    const dispatch=useAppDispatch();

    console.log('mob',mobiles);
    

    useEffect(()=>{
        console.log('called');
        if(!input)return;
        dispatch(fetchData(input));
    },[input])

    if(error){
        return <h1>Error occured</h1>
    }

  return (
    <div>
        <input type="text" placeholder="enter product name" className="border"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
        />

        <div>
            {   
                loading?'':
                mobiles?.map((mobileObj)=>(
                    <div key={mobileObj.id}>{mobileObj.title}</div>
                ))
            }
        </div>

    </div>
  )
}
