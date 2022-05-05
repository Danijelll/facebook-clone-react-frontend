import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { IAlbumData, IAlbumUpdateData } from "../../interfaces/IAlbum";
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

const updateAlbumCaption = createAsyncThunk(
    'albums/updateAlbumCaption',
    async (albumUpdateData: IAlbumUpdateData) => {
        const response = await AlbumService.updateAlbumCaption(albumUpdateData);
        return response;
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
            state.userAlbums = state.userAlbums.filter((album: { id: number; }) => album.id !== action.payload)
        })
        builder.addCase(updateAlbumCaption.fulfilled, (state, action) => {
        })
    },
});

export { getAllCurrentUserAlbums, getCurrentOpenAlbum, deleteAlbumById, updateAlbumCaption }
export default albumSlice.reducer;