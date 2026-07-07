import { createSlice } from "@reduxjs/toolkit";

type CounterActions={
    type:string,
    payload:number,
}

type InitialState={
    count:number,
}
const initialState:InitialState={
    count:0,
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrementBy5:(state,action:CounterActions)=>{
            state.count-=action.payload;
        },
        reset:(state)=>{
            // initialState.count=0; //cannot do this
            state.count=0;
        }
    }
})

export const {increment,decrementBy5,reset}=counterSlice.actions;
export default counterSlice.reducer;
