import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister, IUserData } from "../../interfaces/IUser";
import UserService from "../../services/UserService";

export interface UserSliceState {
    currentUser: IUserData;
}

const initialState = {
    user: [],
}

const login = createAsyncThunk(
    'user/login',
    async (loginData: ILogin, thunkAPI) => {
        const response = await UserService.login(loginData);
        return response;
    }
)
const register = createAsyncThunk(
    'user/register',
    async (registerData: IRegister, thunkAPI) => {
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

export const userSlice = createSlice({
    name: "user",
    initialState: { currentUser: {} },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {})
        builder.addCase(register.fulfilled, (state, action) => {})
        builder.addCase(getCurrentUserData.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        })
    },
});

export { login, register, getCurrentUserData };
export default userSlice.reducer;