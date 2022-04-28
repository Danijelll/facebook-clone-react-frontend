import { createSlice } from "@reduxjs/toolkit";

export interface UiSliceState {
    setShowImageModal: boolean;
    setShowCommentModal: boolean;

}

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        setShowImageModal: false,
        setShowCommentModal: false
    },
    reducers: {
        showCommentModal(state) {
            state.setShowCommentModal = true;
        },
        closeCommentModal(state) {
            state.setShowCommentModal = false;
        },
        showAddImageModal(state) {
            state.setShowImageModal = true;
        },
        closeAddImageModal(state) {
            state.setShowImageModal = false;
        },
    },
});
export const { showAddImageModal, closeAddImageModal, showCommentModal, closeCommentModal } = uiSlice.actions
export default uiSlice.reducer;