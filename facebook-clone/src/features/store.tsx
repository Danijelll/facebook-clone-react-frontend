import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Users/userSlice'

export const store = configureStore({
    reducer: {
      userReducer,
      
    },
});

export type AppDispatch = typeof store.dispatch;