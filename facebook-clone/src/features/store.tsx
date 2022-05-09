import { configureStore } from "@reduxjs/toolkit";
import user, { UserSliceState } from './Users/userSlice'
import image, { ImageSliceState } from './Images/ImageSlice'
import album, { AlbumSliceState } from './Albums/AlbumSlice'
import ui, { UiSliceState } from './Ui/UiSlice'
import friendship, { FriendshipSliceState } from './Friendships/FriendshipSlice'
import comment, { CommentSliceState } from './Comments/CommentSlice'

export const store = configureStore({
  reducer: {
    user,
    image,
    album,
    ui,
    friendship,
    comment,

  },
});

export type AppDispatch = typeof store.dispatch;

export interface RootStore {
  user: UserSliceState;
  image: ImageSliceState;
  album: AlbumSliceState;
  ui: UiSliceState;
  friendship: FriendshipSliceState;
  comment: CommentSliceState;
}