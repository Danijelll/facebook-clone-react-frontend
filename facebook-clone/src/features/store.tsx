import { configureStore } from "@reduxjs/toolkit";
import user, { UserSliceState } from './Users/userSlice'
import image, { ImageSliceState } from './Images/ImageSlice'
import album, { AlbumSliceState } from './Albums/AlbumSlice'



export const store = configureStore({
    reducer: {
      user,
      image,
      album,
      
    },
});

export type AppDispatch = typeof store.dispatch;

export interface RootStore {
  user: UserSliceState;
  image: ImageSliceState;
  album: AlbumSliceState
}