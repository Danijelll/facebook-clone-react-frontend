import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister, ITwoFactorCode, IUserData, IUserListData, IUsersPerPage, IUserUpdateCoverImageData, IUserUpdateProfileImageData } from "../../interfaces/IUser";
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

const confirm2FA = createAsyncThunk(
    'user/confirm2FA',
    async (twoFactorLoginData: ITwoFactorCode) => {
        const response = await UserService.confirm2FA(twoFactorLoginData.username, twoFactorLoginData.twoFactorCode);
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
    async (usersOnPage: IUsersPerPage) => {
        const response = await UserService.getUserByUsername(usersOnPage.username, usersOnPage.page);
        return response;
    }
)
const searchUsersWithBanned = createAsyncThunk(
    'user/searchUsersWithBanned',
    async (usersOnPage: IUsersPerPage) => {
        const response = await UserService.getUserByUsernameWithBanned(usersOnPage.username, usersOnPage.page);
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
const logout = createAsyncThunk(
    'user/logout',
    async () => {
        await UserService.logout();
        return true;
    }
)
const unbanUser = createAsyncThunk(
    'user/unbanUser',
    async (id: number) => {
        const response = await UserService.unbanUser(id);
        return response;
    }
)
const banUser = createAsyncThunk(
    'user/banUser',
    async (id: number) => {
        const response = await UserService.banUser(id);
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
        clearUserData: (state) => {
            state.currentUser = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => { })

        builder.addCase(register.fulfilled, (state, action) => { })

        builder.addCase(searchUsers.fulfilled, (state, action) => {
            if (action.payload.length)
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
        builder.addCase(unbanUser.fulfilled, (state, action) => {
            state.currentFriend = action.payload;
        })
        builder.addCase(banUser.fulfilled, (state, action) => {
            state.currentFriend = action.payload;
        })
        builder.addCase(searchUsersWithBanned.fulfilled, (state, action) => {
            if (action.payload.length)
                state.userList = action.payload;
        })
        builder.addCase(confirm2FA.fulfilled, (state, action) => {
        })
    },
});

export {
    login, register, logout,
    getCurrentUserData,
    searchUsers,
    searchUserById,
    editUserProfileImage,
    editUserCoverImage,
    unbanUser, banUser,
    searchUsersWithBanned,
    confirm2FA
};
export const { clearUserData } = userSlice.actions
export default userSlice.reducer;