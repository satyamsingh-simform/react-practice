import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './features/cartSlice';

const store=configureStore({
    reducer:{
        cart:cartSlice,
    }
})

export type AppSelector =ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

export default store;