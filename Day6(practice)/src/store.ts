import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counterSlice'

const store=configureStore({
    reducer:{
        counter:counterSlice,
    }
})

export type AppStore=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export default store;