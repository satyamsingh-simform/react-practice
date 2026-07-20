import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../components/ShowProducts";

export type Item = {
  id: number;
  name: string;
  price: number;
  quantity:number;
};

type InitialState={
    items:Item[]
}

const initialState:InitialState={
    items:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Product>)=>{
            console.log(action.payload);
            
            const obj=state.items.find((itemObj)=>itemObj.id===action.payload.id);
            if(obj){
                obj.quantity++;
                return;
            }            
            state.items.push({...action.payload,quantity:1});
        }
    }

})

export default cartSlice.reducer;
export const {addToCart} =cartSlice.actions;