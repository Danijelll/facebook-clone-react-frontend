import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAlbumCommentPageData, ICommentData, ICommentUpdateData, ICommentUploadData } from "../../interfaces/IComment";
import CommentItem from "../../pages/CommentModal/Components/CommentItem/CommentItem";
import CommentService from "../../services/CommentService";


export interface CommentSliceState {
    currentAlbumComments: Array<ICommentData>;
    currentOpenAlbum:ICommentData
}

const getAllAlbumComments = createAsyncThunk(
    'comment/getAllAlbumComments',
    async (albumCommentPage: IAlbumCommentPageData) => {
        const response = await CommentService.getAllAlbumComments(albumCommentPage.albumId, albumCommentPage.page);
        return response;
    }
)

const getCommentById = createAsyncThunk(
    'comment/getCommentById',
    async (commentId: number) => {
        const response = await CommentService.getCommentById(commentId);
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

const updateComment = createAsyncThunk(
    'comment/updateComment',
    async (commentUpdateData: ICommentUpdateData) => {
        const response = await CommentService.updateComment(commentUpdateData);
        return response;
    }
)

export const commentSlice = createSlice({
    name: "comment",
    initialState: {
        currentAlbumComments: [],
        currentOpenAlbum: undefined,
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
        builder.addCase(getCommentById.fulfilled, (state, action) => {
            state.currentOpenAlbum = action.payload;
        })
    },
});

export { getAllAlbumComments, uploadComment, deleteCommentById, updateComment, getCommentById }
export default commentSlice.reducer;