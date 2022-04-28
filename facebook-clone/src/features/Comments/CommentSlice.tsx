import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICommentData } from "../../interfaces/IComment";
import CommentService from "../../services/CommentService";


export interface CommentSliceState {
    currentAlbumComments: Array<ICommentData>;
}

const getAllAlbumComments = createAsyncThunk(
    'comment/getAllAlbumComments',
    async (albumId: number) => {
        const response = await CommentService.getAllAlbumComments(albumId);
        return response;
    }
)

export const commentSlice = createSlice({
    name: "comment",
    initialState: {
        currentAlbumComments: undefined
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllAlbumComments.fulfilled, (state, action) => {
            state.currentAlbumComments = action.payload;
        })

    },
});

export { getAllAlbumComments }
export default commentSlice.reducer;