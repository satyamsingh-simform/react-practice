import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from './features/productSlice';

const store=configureStore({
    reducer:{
       phone:phoneSlice, 
    }
})

export default store;
export type AppStore=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

