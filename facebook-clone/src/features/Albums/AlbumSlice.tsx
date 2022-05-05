import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAlbumData } from "../../interfaces/IAlbum";
import AlbumService from "../../services/AlbumService";


export interface AlbumSliceState {
    userAlbums: Array<IAlbumData>;
    currentOpenAlbum: IAlbumData;
}

const getAllCurrentUserAlbums = createAsyncThunk(
    'albums/getAllCurrentUserAlbums',
    async (userId: number) => {
        const response = await AlbumService.getAllCurrentUserAlbums(userId);
        return response;
    }
)

const getCurrentOpenAlbum = createAsyncThunk(
    'albums/getCurrentOpenAlbum',
    async (albumId: number) => {        
        const response = await AlbumService.getCurrentOpenAlbum(albumId);
        return response;
    }
)

const deleteAlbumById = createAsyncThunk(
    'albums/deleteAlbumById',
    async (albumId: number) => {        
        await AlbumService.deleteAlbumById(albumId);
        return albumId;
    }
)

export const albumSlice = createSlice({
    name: "album",
    initialState: {
        userAlbums: [],
        currentOpenAlbum: undefined,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCurrentUserAlbums.fulfilled, (state, action) => {
            state.userAlbums = action.payload;
        })
        builder.addCase(getCurrentOpenAlbum.fulfilled, (state, action) => {
            state.currentOpenAlbum = action.payload;            
        })
        builder.addCase(deleteAlbumById.fulfilled, (state, action) => {
            state.userAlbums = state.userAlbums.filter((album: { id: number; })=>album.id !== action.payload)            
        })
    },
});

export { getAllCurrentUserAlbums, getCurrentOpenAlbum, deleteAlbumById }
export default albumSlice.reducer;