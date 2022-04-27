import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAlbumData } from "../../interfaces/IAlbum";
import { ICommentData } from "../../interfaces/IComment";
import AlbumService from "../../services/AlbumService";


export interface AlbumSliceState {
    userAlbums: Array<IAlbumData>;
    currentAlbumComments: Array<ICommentData>;
}

const getAllCurrentUserAlbums = createAsyncThunk(
    'albums/getAllCurrentUserAlbums',
    async (userId: number) => {
        const response = await AlbumService.getAllCurrentUserAlbums(userId);
        return response;
    }
)

const getAllAlbumComments = createAsyncThunk(
    'albums/getAllAlbumComments',
    async (albumId: number) => {
        const response = await AlbumService.getAllAlbumComments(albumId);
        return response;
    }
)

export const albumSlice = createSlice({
    name: "album",
    initialState: {
        userAlbums: undefined,
        currentAlbumComments: undefined
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCurrentUserAlbums.fulfilled, (state, action) => {
            state.userAlbums = action.payload;
        })
        builder.addCase(getAllAlbumComments.fulfilled, (state, action) => {
            state.currentAlbumComments = action.payload;
        })

    },
});

export { getAllCurrentUserAlbums, getAllAlbumComments }
export default albumSlice.reducer;