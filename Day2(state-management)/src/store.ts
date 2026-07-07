import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './feature/counter1Slice/Count1Slice';
import todoSlice from './feature/todo-slice-thunk/todoSlice'

const store=configureStore({
    reducer:{
        counter:counterSlice,
        todo:todoSlice,
    }
})

export type AppStore=ReturnType<typeof store.getState>;
export type DispatchType=typeof store.dispatch
export default store;