import { useDispatch, useSelector } from "react-redux"
import type { AppStore, DispatchType } from "../store"
import { useEffect } from "react"
import { fetchTodos } from "../feature/todo-slice-thunk/todoSlice"

export const Todo = () => {
    
    const {data,loading,error}=useSelector((store:AppStore)=>store.todo)
    const dispatch=useDispatch<DispatchType>();

    console.log(loading);

    useEffect(()=>{
        dispatch(fetchTodos());
    },[])

    if(loading){
        return<h1>loading...</h1>
    }

    if(error){
        return <h1>ERROR:{error}</h1>
    }

  return (
    <div className="flex flex-col  border">
        {
            data?.map((obj)=>(
                <p key={obj.id}>
                    <p>{obj.title}</p>
                    <p>{obj.completed}</p>
                </p>
            ))
        }
    </div>
  )
}
