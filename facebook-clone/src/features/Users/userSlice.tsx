import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ILogin from "../../interfaces/IUser";
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

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { username: "", email: "", password: "" } },
    reducers: {
        // login: (state, payload) => {
        //     UserService.login(payload.payload);
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {})
    },
});

export { login };
export const getUser = (state: any) => state.user.user;
export default userSlice.reducer;