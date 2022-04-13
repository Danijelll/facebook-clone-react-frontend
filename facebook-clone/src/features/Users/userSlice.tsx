import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister } from "../../interfaces/IUser";
import UserService from "../../services/UserService";

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

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { username: "", email: "", password: "" } },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {})
        builder.addCase(register.fulfilled, (state, action) => {})
    },
});

export { login };
export { register };
export const getUser = (state: any) => state.user.user;
export default userSlice.reducer;