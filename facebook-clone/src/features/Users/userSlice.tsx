import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister, IUserData, IUserListData, IUserUpdateCoverImageData, IUserUpdateProfileImageData } from "../../interfaces/IUser";
import UserService from "../../services/UserService";

export interface UserSliceState {
    currentUser: IUserData;
    userList: IUserListData[];
    currentFriend: IUserData;
}

const login = createAsyncThunk(
    'user/login',
    async (loginData: ILogin) => {
        const response = await UserService.login(loginData);
        return response;
    }
)
const register = createAsyncThunk(
    'user/register',
    async (registerData: IRegister) => {
        const response = await UserService.register(registerData);
        return response;
    }
)
const getCurrentUserData = createAsyncThunk(
    'user/getCurrentUserData',
    async () => {
        const response = await UserService.getCurrentUserData();
        return response;
    }
)
const searchUsers = createAsyncThunk(
    'user/searchUsers',
    async (username: string) => {
        const response = await UserService.getUserByUsername(username);
        return response;
    }
)
const searchUserById = createAsyncThunk(
    'user/searchUserById',
    async (id: number) => {
        const response = await UserService.getUserById(id);
        return response;
    }
)
const editUserProfileImage = createAsyncThunk(
    'user/editUserProfileImage',
    async (data: IUserUpdateProfileImageData) => {
        const response = await UserService.editUserProfileImage(data);
        return response;
    }
)
const editUserCoverImage = createAsyncThunk(
    'user/editUserCoverImage',
    async (data: IUserUpdateCoverImageData) => {
        const response = await UserService.editUserCoverImage(data);
        return response;
    }
)
export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: undefined,
        userList: undefined,
        currentFriend: undefined,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => { })

        builder.addCase(register.fulfilled, (state, action) => { })

        builder.addCase(searchUsers.fulfilled, (state, action) => {
            state.userList = action.payload
        })
        builder.addCase(getCurrentUserData.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        })
        builder.addCase(searchUserById.fulfilled, (state, action) => {
            state.currentFriend = action.payload;
        })
        builder.addCase(editUserProfileImage.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        })
        builder.addCase(editUserCoverImage.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        })
    },
});

export { login, register, getCurrentUserData, searchUsers, searchUserById, editUserProfileImage, editUserCoverImage };
export default userSlice.reducer;