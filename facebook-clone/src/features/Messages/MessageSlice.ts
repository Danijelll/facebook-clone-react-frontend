import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMessageData } from "../../interfaces/IMessage";
import ChatService from "../../services/ChatService";

export interface MessageSliceState {
    messages: IMessageData[];
}

const connect = createAsyncThunk(
    'albums/connect',
    async (name:string) => {
        const response = await ChatService.connect(name);
        return response;
    }
)

const sendMessage = createAsyncThunk(
    'albums/sendMessage',
    async (message: IMessageData) => {        
        const response = await ChatService.sendMessage(message.sender, message.receiver, message.message);
        return response;
    }
)

export const messageSlice = createSlice({
    name: "messages",
    initialState: {
        messages: undefined
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(sendMessage.fulfilled, (state, action) => {
        })
    },
});
export {
    connect,
    sendMessage,
}
export default messageSlice.reducer;