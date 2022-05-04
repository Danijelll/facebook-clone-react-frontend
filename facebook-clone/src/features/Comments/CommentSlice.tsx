import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAlbumCommentPageData, ICommentData, ICommentUploadData } from "../../interfaces/IComment";
import CommentService from "../../services/CommentService";


export interface CommentSliceState {
    currentAlbumComments: Array<ICommentData>;
}

const getAllAlbumComments = createAsyncThunk(
    'comment/getAllAlbumComments',
    async (albumCommentPage: IAlbumCommentPageData) => {
        const response = await CommentService.getAllAlbumComments(albumCommentPage.albumId, albumCommentPage.page);
        return response;
    }
)

const uploadComment = createAsyncThunk(
    'comment/uploadComment',
    async (comment: ICommentUploadData) => {
        const response = await CommentService.uploadComment(comment);
        return response;
    }
)

const deleteCommentById = createAsyncThunk(
    'comment/deleteCommentById',
    async (commentId: number) => {
        const response = await CommentService.deleteCommentById(commentId);
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
        builder.addCase(uploadComment.fulfilled, (state, action) => {
        })
        builder.addCase(deleteCommentById.fulfilled, (state, action) => {
        })

    },
});

export { getAllAlbumComments, uploadComment, deleteCommentById }
export default commentSlice.reducer;