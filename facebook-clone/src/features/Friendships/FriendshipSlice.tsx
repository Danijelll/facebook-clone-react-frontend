import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BooleanLiteral } from "typescript";
import { FriendRequestStatusEnum } from "../../Models/FriendRequestStatusEnum";
import FriendshipService from "../../services/FriendshipService";

export interface FriendshipSliceState {
    RequestStatus: FriendRequestStatusEnum | undefined;
}

const sendFriendRequest = createAsyncThunk(
    'friendships/sendFriendRequest',
    async (friendId: number) => {
        const response = await FriendshipService.sendFriendRequest(friendId);
        return response;
    }
)

const deleteFriendRequest = createAsyncThunk(
    'friendships/deleteFriendRequest',
    async (friendId: number) => {
        const response = await FriendshipService.deleteFriendRequest(friendId);
        return response;
    }
)

const confirmFriendRequest = createAsyncThunk(
    'friendships/confirmFriendRequest',
    async (friendId: number) => {
        const response = await FriendshipService.confirmFriendRequest(friendId);
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

const initialState: FriendshipSliceState = { 
    RequestStatus: undefined
 }

export const friendshipSlice = createSlice({
    name: "friendships",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(sendFriendRequest.fulfilled, (state, action) => {            
            state.RequestStatus = FriendRequestStatusEnum.PendingOutgoing;    
        })
        builder.addCase(checkFriendRequestStatus.fulfilled, (state, action) => {
            state.RequestStatus = action.payload
        })
        builder.addCase(confirmFriendRequest.fulfilled, (state, action) => {
            state.RequestStatus = FriendRequestStatusEnum.Friends
        })
        builder.addCase(deleteFriendRequest.fulfilled, (state, action) => {
            state.RequestStatus = FriendRequestStatusEnum.NoRequest
        })

    },

});
export { sendFriendRequest, checkFriendRequestStatus, confirmFriendRequest, deleteFriendRequest }
export default friendshipSlice.reducer;