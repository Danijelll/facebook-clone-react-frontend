import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: [],
}

export const userSlice = createSlice({
    name:"user",
    initialState:{value: {username:"", email: "", password:""}},
    reducers:{
        login: (state, action ) => {
            state.value = action.payload;
        }
    }
});

export const {login} = userSlice.actions;
export const getUser = (state:any) => state.user.user;
export default userSlice.reducer;