import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

/*
createAsyncThunk<Returned,ThunkArg,ThunkApiConfig>()
ThunkApiConfig={
    rejectValue: string;  //this say what argument type rejectWithValue takes
    state: RootState;
    dispatch: AppDispatch;
    extra: MyExtra;
}
*/

export const fetchUser=createAsyncThunk<User[],void,{rejectValue:string}>(
    'fetch/user',
    async(_,{rejectWithValue})=>{
        try{
            const resp=await fetch('https://jsonplaceholder.typicode.com/users');
            console.log('-->',resp);
            
            if(!resp.ok){
                throw new Error("counld not fetched data");
            }
            const data=await resp.json();
            console.log('-->',data);
            
            return data;
        }
        catch(err){
            return rejectWithValue(err instanceof Error ? err.message :'unknown error');
            // return (err instanceof Error ? err.message : 'Unknown error'); //this become fullfield case
        }
    }
)

type User={
    id:number,
    name:string,
    email:string,
    username:string,
}

type InitialState={
    user:User[],
    loading:boolean,
    error:string|null;
}

const initialState:InitialState={
    user:[],
    loading:true,
    error:null,
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload;
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            console.log('-->action:',action.payload);
            state.loading=false;
            state.error=action.payload ?? action.error.message??null;
        })
    }
})

export default userSlice.reducer;