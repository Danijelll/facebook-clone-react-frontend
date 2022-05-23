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
        const response = await ChatService.sendMessage(message);
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

const getMessages = createAsyncThunk(
    'message/getMessages',
    async (receiverId: number) => {
        const response = await ChatService.getMessages(receiverId);
        return response;
    }
)

const initialState = {
    messages: []
}

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state: any, action: any) => {
            state.messages.push(action.payload)
        },
        clearMessages: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(receiveMessages.fulfilled, (state, action) => {
        })
        builder.addCase(getMessages.fulfilled, (state: any, action) => {
            state.messages = action.payload
        })
    },
});

export const { addMessage, clearMessages } = messageSlice.actions
export {
    connect,
    sendMessage,
    receiveMessages,
    getMessages
}
export default messageSlice.reducer;