import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos=createAsyncThunk<TodoData[],void,{rejectValue:string}>(
    'fetchTodos',
    async(_,{rejectWithValue})=>{
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/todos');
            if(!response.ok){
                throw new Error('could not fetched todos');
            }
            return await response.json();
        }
        catch(err){
            if(err instanceof Error){
                return rejectWithValue(err.message)
            }
            return 'something went wrong'
        }
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
                state.error=actions.payload??'something went wrong';
            })
    }
})

export default todoSlice.reducer;
