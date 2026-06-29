import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos=createAsyncThunk(
    'todos/fetch',
    async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/todo');
        const todo=response.json();
        return todo;
    }
)

type TodoData={
    id:number,
    title:string,
    completed:boolean,
}

type initialStateType={
    data:TodoData[]|null,
    loading:boolean,
    error:string|null,
}

const initialState:initialStateType={
    data:[],
    loading:true,
    error:null,
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchTodos.pending,(state)=>{
                state.loading=true;
                state.data=null;
            })
            .addCase(fetchTodos.fulfilled,(state,actions)=>{
                state.loading=false;
                state.data=actions.payload;
            })
            .addCase(fetchTodos.rejected,(state,actions)=>{
                state.loading=false;
                state.error='error';
            })
    }
})

export default todoSlice.reducer;
