import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ActionAddTodo={
    type:string,
    payload:Todos,
}
export type Filter='all'|'completed'|'pending'

export type Todos={
    id: number;
    title: string;
    completed: boolean;
}   
type InitialState={
    todos:Todos[],
    filter:Filter
}
const initialState:InitialState={
    todos:[],
    filter:'all'
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action:ActionAddTodo)=>{
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action:PayloadAction<number>)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
        editTodo:(state,action:PayloadAction<number>)=>{
            const title=prompt('edit todo',state.todos.find((todo)=>todo.id===action.payload)?.title);
            if(!title) return;
            state.todos=state.todos.map((todo)=>(
                todo.id===action.payload
                ?{
                    ...todo,
                    title:title
                }
                :todo
            ))
        },
        toggleDone:(state,action)=>{
            state.todos=state.todos.map((todo)=>(
                todo.id===action.payload
                ?{
                    ...todo,
                    completed:todo.completed===false?true:false,
                }
                :todo
            ))
        },
        filterTodo:(state,action:PayloadAction<Filter>)=>{
             state.filter=action.payload;
        }
    }
})

export const {addTodo,deleteTodo,editTodo,toggleDone,filterTodo}=todoSlice.actions;
export default todoSlice.reducer;