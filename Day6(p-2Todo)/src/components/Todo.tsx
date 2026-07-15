import {addTodo,deleteTodo, editTodo, filterTodo, toggleCompleted} from '../features/todoSlice'
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../hooks/useStore';

export const Todo = () => {
    const [input,setInput]=useState('');
    const {todos,filter}=useAppSelector(store=>store.todo);
    const dispatch=useAppDispatch();

    const filteredData=todos.filter((todo)=>{
        if(filter==='completed'){
            return todo.completed;
        }
        if(filter==='pending'){
            return todo.completed===false;
        }
        return true;
    })

  return (
    <div>
        <input type="text" placeholder="enter todo"
            className="border"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
        />
        <button onClick={()=>dispatch(addTodo(input))}>AddTodo</button>
        <br />
        <select className="border" name="" id="" onChange={(e)=>dispatch(filterTodo(e.target.value))}>
            <option value="all">all</option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
        </select>

        {
            filteredData.map((todoObj)=>(
                <div key={todoObj.id}>
                    {todoObj.title}
                    <button className={`border decoration:${todoObj.completed?'line-through':''}`} onClick={()=>dispatch(toggleCompleted(todoObj.id))}>{todoObj.completed?"    completed   ":'    pending     '}</button>
                    <button 
                    className="border"
                    onClick={()=>dispatch(deleteTodo(todoObj.id))}
                    >delTodo
                    </button>
                    <button className="border" onClick={()=>dispatch(editTodo(todoObj.id))}>editTodo</button>

                </div>
            ))
        }
    </div>
  )
}
