import { useAppDispatch } from "../hooks/useStore";
import {editTodo} from '../features/todoSlice'
import { useState } from "react";

export const Modal = ({closeModal,id}:{closeModal:()=>void,id:number}) => {
    const dispatch=useAppDispatch();
    const [title,setTitle]=useState('');
  
    return (
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm"></div>
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border border-gray-200 p-5 w-70 rounded-xl shadow-2xl m-auto flex flex-col gap-3 ">
      <input type="text" placeholder="enter new title" className="border rounded"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
      />
      <div className="flex justify-between">
        <button className="border rounded-sm px-3" 
        onClick={()=>{
            closeModal();
            dispatch(editTodo({id,title}));
        }}>
        edit title
      </button>
      <button className="border rounded-sm px-3" 
        onClick={()=>{
            closeModal();
        }}>
        cancel
      </button>
      </div>
      
    </div>
    </>
  )
}
