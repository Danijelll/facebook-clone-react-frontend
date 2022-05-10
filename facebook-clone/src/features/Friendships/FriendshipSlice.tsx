import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BooleanLiteral } from "typescript";
import { IFriendRequest } from "../../interfaces/IFriendRequest";
import { FriendRequestStatusEnum } from "../../Models/FriendRequestStatusEnum";
import FriendshipService from "../../services/FriendshipService";

export interface FriendshipSliceState {
    requestStatus: FriendRequestStatusEnum | undefined;
    friendRequestList: IFriendRequest[] | undefined
}

const sendFriendRequest = createAsyncThunk(
    'friendships/sendFriendRequest',
    async (friendId: number) => {
        const response = await FriendshipService.sendFriendRequest(friendId);
        return response;
    }
)

const getAllIncomingFriendRequests = createAsyncThunk(
    'friendships/getAllIncomingFriendRequests',
    async (page: number) => {
        const response = await FriendshipService.getAllIncomingFriendRequests(page);
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
    requestStatus: undefined,
    friendRequestList: undefined
}

export const friendshipSlice = createSlice({
    name: "friendships",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(sendFriendRequest.fulfilled, (state, action) => {
            state.requestStatus = FriendRequestStatusEnum.PendingOutgoing;
        })
        builder.addCase(checkFriendRequestStatus.fulfilled, (state, action) => {
            state.requestStatus = action.payload;
        })
        builder.addCase(confirmFriendRequest.fulfilled, (state, action) => {
            state.requestStatus = FriendRequestStatusEnum.Friends;
        })
        builder.addCase(deleteFriendRequest.fulfilled, (state, action) => {
            state.requestStatus = FriendRequestStatusEnum.NoRequest;
        })
        builder.addCase(getAllIncomingFriendRequests.fulfilled, (state, action) => {
            state.friendRequestList = action.payload;
        })

    },

});
export {
    sendFriendRequest,
    checkFriendRequestStatus,
    confirmFriendRequest,
    deleteFriendRequest,
    getAllIncomingFriendRequests
}
export default friendshipSlice.reducer;