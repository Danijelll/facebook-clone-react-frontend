import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FriendshipService from "../../services/FriendshipService";

export interface FriendshipSliceState {

}

const sendFriendRequest = createAsyncThunk(
    'friendships/sendFriendRequest',
    async (friendId: number) => {
        const response = await FriendshipService.sendFriendRequest(friendId);
        return response;
    }
)

export const friendshipSlice = createSlice({
    name: "ui",
    initialState: {  },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(sendFriendRequest.fulfilled, (state, action) => { })
    },

});
export { sendFriendRequest }
export default friendshipSlice.reducer;