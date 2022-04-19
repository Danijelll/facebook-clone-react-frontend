import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAlbumData } from "../../interfaces/IAlbum";
import AlbumService from "../../services/AlbumService";


export interface AlbumSliceState {
    userAlbums: Array<IAlbumData>;
}


const getAllCurrentUserAlbums = createAsyncThunk(
    'albums/getAllCurrentUserAlbums',
    async (userId : number) => {
        const response = await AlbumService.getAllCurrentUserAlbums(userId);
        return response;
    }
)

export const albumSlice = createSlice({
    name: "album",
    initialState: { userAlbums: {} },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCurrentUserAlbums.fulfilled, (state, action) => {
            state.userAlbums = action.payload;
        })

    },
});

export { getAllCurrentUserAlbums }
export default albumSlice.reducer;