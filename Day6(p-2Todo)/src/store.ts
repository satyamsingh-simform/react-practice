import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './features/todoSlice'

const store=configureStore({
    reducer:{
        todo:todoSlice,
    }
})

export type AppSelector=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export default store;