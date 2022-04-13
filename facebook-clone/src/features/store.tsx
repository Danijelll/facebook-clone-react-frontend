import { configureStore } from "@reduxjs/toolkit";
import user, { UserSliceState } from './Users/userSlice'

export const store = configureStore({
    reducer: {
      user,
      
    },
});

export type AppDispatch = typeof store.dispatch;

export interface RootStore {
  user: UserSliceState;
}