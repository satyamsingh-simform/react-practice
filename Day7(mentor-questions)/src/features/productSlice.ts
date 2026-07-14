import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData=createAsyncThunk<MobileType[],string,{rejectValue:string}>(
    'fetch/phone',
    async (param)=>{
        try{
            const resp=await fetch(`https://dummyjson.com/products/search?q=${param}`);
            // console.log('called made--->',await resp.json());
            const data=await resp.json();
            console.log(data.products);
            
            return data.products;
        }
        catch(err){
           
        }
    }
)

type MobileType={
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
}

type InitialState={
    mobiles:MobileType[],
    loading:boolean,
    error:string|null|unknown,
}

const initialState:InitialState={
    mobiles:[],
    loading:false,
    error:null,
}

const phoneSlice=createSlice({
    "name":'phone',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchData.pending,(state)=>{
                state.loading=true;
            })
            .addCase(fetchData.fulfilled,(state,action)=>{
                state.loading=false;
                console.log('action:',action.payload);
                
                state.mobiles=action.payload;
            })
            .addCase(fetchData.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })

    }
})

export default phoneSlice.reducer;

