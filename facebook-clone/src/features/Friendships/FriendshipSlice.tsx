import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BooleanLiteral } from "typescript";
import { FriendRequestStatusEnum } from "../../Models/FriendRequestStatusEnum";
import FriendshipService from "../../services/FriendshipService";

export interface FriendshipSliceState {
    RequestStatus: FriendRequestStatusEnum;
    RefreshButton: boolean;
}

const sendFriendRequest = createAsyncThunk(
    'friendships/sendFriendRequest',
    async (friendId: number) => {
        await FriendshipService.sendFriendRequest(friendId);
        return true;
    }
)

const cancelFriendRequest = createAsyncThunk(
    'friendships/cancelFriendRequest',
    async (friendId: number) => {
        await FriendshipService.cancelFriendRequest(friendId);
        return true;
    }
)
const confirmFriendRequest = createAsyncThunk(
    'friendships/confirmFriendRequest',
    async (friendId: number) => {
        await FriendshipService.confirmFriendRequest(friendId);
        return true;
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
    initialState: {
        RequestStatus: undefined,
        RefreshButton: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(sendFriendRequest.fulfilled, (state, action) => {
            state.RefreshButton = !state.RefreshButton
        })
        builder.addCase(checkFriendRequestStatus.fulfilled, (state, action) => {
            state.RequestStatus = action.payload
        })
        builder.addCase(cancelFriendRequest.fulfilled, (state, action) => {
            state.RefreshButton = !state.RefreshButton
        })

    },

});
export { sendFriendRequest, checkFriendRequestStatus, cancelFriendRequest, confirmFriendRequest }
export default friendshipSlice.reducer;