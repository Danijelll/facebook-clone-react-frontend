import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICreateMessageData, IMessageData } from "../../interfaces/IMessage";
import ChatService from "../../services/ChatService";

export interface MessageSliceState {
    messages: Array<IMessageData>;
}

const connect = createAsyncThunk(
    'message/connect',
    async (name: string) => {
        const response = await ChatService.connect(name);
        return response;
    }
)

const sendMessage = createAsyncThunk(
    'message/sendMessage',
    async (message: ICreateMessageData) => {
        const response = await ChatService.sendMessage(message.senderId, message.receiverId, message.message);
        return response;
    }
)

const receiveMessages = createAsyncThunk(
    'message/receiveMessages',
    async () => {
        const response = await ChatService.receiveMessages();
        return response;
    }
)

export const messageSlice = createSlice({
    name: "messages",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state:any, action:any) => {
            state.messages.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(receiveMessages.fulfilled, (state, action) => {
        })
    },
});

export const { addMessage } = messageSlice.actions
export {
    connect,
    sendMessage,
    receiveMessages,
}
export default messageSlice.reducer;