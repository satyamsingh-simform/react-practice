import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Todo={
    id:number,
    title:string,
    completed:boolean,
}

type InitialState={
    todos:Todo[],
    filter:string,
}

const initialState:InitialState={
    todos:[{id:1,title:'learn react',completed:false},{id:2,title:'learn react-redux',completed:false}],
    filter:'all',
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<string>)=>{
            state.todos?.push({id:Number(Math.random()),title:action.payload,completed:false})
        },
        deleteTodo:(state,action:PayloadAction<number>)=>{
            state.todos=state.todos?.filter((todo)=>todo.id!==action.payload);
        },
        editTodo:(state,action:PayloadAction<number>)=>{
            const updatedTitle=prompt('enter title');//remove this
            if(!updatedTitle) return;
            state.todos=state.todos?.map((todo)=>{
                if(todo.id===action.payload){
                    return{
                        ...todo,
                        title:updatedTitle
                    }
                }
                return todo
            });
        },
        toggleCompleted:(state,action:PayloadAction<number>)=>{
            state.todos=state.todos?.map((todo)=>(
                todo.id===action.payload
                ?
                {
                    ...todo,
                    completed:todo.completed?false:true,
                }
                :todo
            ))
        },
        filterTodo:(state,action:PayloadAction<string>)=>{
            state.filter=action.payload;
        }
    }
})

export const {addTodo,deleteTodo,editTodo,toggleCompleted,filterTodo}=todoSlice.actions;
export default todoSlice.reducer;