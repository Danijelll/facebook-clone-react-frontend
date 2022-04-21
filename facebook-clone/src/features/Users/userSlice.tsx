import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister, IUserData, IUserListData } from "../../interfaces/IUser";
import UserService from "../../services/UserService";

export interface UserSliceState {
    currentUser: IUserData;
    userList: IUserListData[];
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
            console.log(action.payload);
            
        })
    },
});

export { login, register, getCurrentUserData, searchUsers, searchUserById };
export default userSlice.reducer;