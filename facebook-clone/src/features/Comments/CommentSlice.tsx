import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAlbumCommentPageData, ICommentData, ICommentUploadData } from "../../interfaces/IComment";
import CommentItem from "../../pages/CommentModal/Components/CommentItem/CommentItem";
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
        await CommentService.deleteCommentById(commentId);
        return commentId;
    }
)

export const commentSlice = createSlice({
    name: "comment",
    initialState: {
        currentAlbumComments: []
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
            state.currentAlbumComments = state.currentAlbumComments.filter((commentItem: { id: number; })=>commentItem.id !== action.payload)
        })

    },
});

export { getAllAlbumComments, uploadComment, deleteCommentById }
export default commentSlice.reducer;