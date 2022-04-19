import { configureStore } from "@reduxjs/toolkit";
import user, { UserSliceState } from './Users/userSlice'
import image, { ImageSliceState } from './Images/ImageSlice'


export const store = configureStore({
    reducer: {
      user,
      image,
      
    },
});

export type AppDispatch = typeof store.dispatch;

export interface RootStore {
  user: UserSliceState;
  image: ImageSliceState;
}