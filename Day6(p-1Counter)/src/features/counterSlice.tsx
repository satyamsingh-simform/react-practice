import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialStateType={
   count:number, 
   btnClicked:number,
}

const initialState:InitialStateType={
    count:0,
    btnClicked:0
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
            state.btnClicked+=1;
        },
        decrement:(state,action:PayloadAction<number>)=>{
            state.count-=action.payload;
            state.btnClicked+=1;
        },
        reset:(state)=>{
            state.count=0;
            state.btnClicked+=1;
        }
    }
})

export const {increment,decrement,reset} =counterSlice.actions;
export default counterSlice.reducer;