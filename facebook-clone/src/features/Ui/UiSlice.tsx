import { createSlice } from "@reduxjs/toolkit";

export interface UiSliceState {
    setShowImageModal: boolean;
    setShowCommentModal: boolean;
    setShowEditProfileModal: boolean;

}

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        setShowImageModal: false,
        setShowCommentModal: false,
        setShowEditProfileModal: false
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
        showEditProfileModal(state) {
            state.setShowEditProfileModal = true;
        },
        closeEditProfileModal(state) {
            state.setShowEditProfileModal = false;
        },
    },
});
export const {
    showAddImageModal, closeAddImageModal,
    showCommentModal, closeCommentModal,
    showEditProfileModal, closeEditProfileModal } = uiSlice.actions
export default uiSlice.reducer;