import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { friendRequestStatusEnum } from "../../Models/FriendRequestStatusEnum";
import FriendshipService from "../../services/FriendshipService";

export interface FriendshipSliceState {
    RequestStatus: friendRequestStatusEnum;
}

const sendFriendRequest = createAsyncThunk(
    'friendships/sendFriendRequest',
    async (friendId: number) => {
        const response = await FriendshipService.sendFriendRequest(friendId);
        return response;
    }
)

const checkFriendRequestStatus = createAsyncThunk(
    'friendships/checkFriendRequestStatus',
    async (friendId: number) => {
        const response = await FriendshipService.checkFriendRequestStatus(friendId);
        return response;
    }
)

export const friendshipSlice = createSlice({
    name: "friendships",
    initialState: { RequestStatus:friendRequestStatusEnum },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(sendFriendRequest.fulfilled, (state, action) => { })
        builder.addCase(checkFriendRequestStatus.fulfilled, (state, action) => {
            state.RequestStatus = action.payload            
        })

    },

});
export { sendFriendRequest, checkFriendRequestStatus }
export default friendshipSlice.reducer;