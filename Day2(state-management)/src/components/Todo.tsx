import { useDispatch, useSelector } from "react-redux"
import type { AppStore, DispatchType } from "../store"
import { useEffect } from "react"
import { fetchTodos } from "../todo-slice-thunk/todoSlice"

export const Todo = () => {
    
    const {data,loading,error}=useSelector((store:AppStore)=>store.todo)
    const dispatch=useDispatch<DispatchType>();

    console.log(data,loading);

    useEffect(()=>{
        dispatch(fetchTodos());
    },[])

    if(loading){
        return <h1>ERROR:{error}</h1>
    }

  return (
    <div>
        {
            data?.map((obj)=>(
                <p key={obj.id}>
                    {obj.title}
                </p>
            ))
        }
    </div>
  )
}
