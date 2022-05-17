import { createSlice } from "@reduxjs/toolkit";
import { IErrorData } from "../../interfaces/IError";

export interface ErrorSliceState {
    currentError: IErrorData
}

export const errorSlice = createSlice({
    name: "error",
    initialState: {
        currentError: undefined
    },
    reducers: {
        addNewCurrentError(state, action) {
            state.currentError = action.payload;
        },
    },
});
export const { addNewCurrentError } = errorSlice.actions
export default errorSlice.reducer;