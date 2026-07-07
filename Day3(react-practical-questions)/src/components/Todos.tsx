import { useState } from "react";
import { useStore } from "../hooks/useStore";
import { addTodo,deleteTodo,editTodo,toggleDone,filterTodo, type Filter } from "../features/todoSlice";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { useAppSelector, useAppDispatch } = useStore();
  const dispatch = useAppDispatch();
  const { todos,filter } = useAppSelector((store) => store.todo);


  const filteredData=todos.filter((todo)=>{
    if(filter==='completed'){
      return todo.completed===true
    }
    if(filter==='pending'){
      return todo.completed===false
    }
    return true
  })

  return (
    <div>
      <div>
        <input
          type="text"
          className="border"
          placeholder="enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: Number(Math.random()),
                title: input,
                completed: false,
              }),
            );
          }}
        >
          addTodo
        </button>
      </div>

          <select name="" id="" onChange={(e)=>dispatch(filterTodo(e.target.value as Filter))}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

      <div>
        <h1>all Todo</h1>
        {filteredData.map((todo) => (
          <p key={todo.id}>
            <span>{todo.title} </span>
            <button onClick={()=>{dispatch(editTodo(todo.id))}} className="border">Edit</button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))} className="border">delete</button>
            <button onClick={()=>{dispatch(toggleDone(todo.id))}} className="border">{todo.completed ? "completed" : "pending"}</button>
          </p>
        ))}
      </div>
    </div>
  );
};
