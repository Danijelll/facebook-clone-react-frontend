import { createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/userService";

const initialState = {
    user: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { username: "", email: "", password: "" } },
    reducers: {
        login: (state, payload) => {
            UserService.login(payload);
        }
    }
});

export const { login } = userSlice.actions;
export const getUser = (state: any) => state.user.user;
export default userSlice.reducer;