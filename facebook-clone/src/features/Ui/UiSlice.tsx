import { createSlice } from "@reduxjs/toolkit";

export interface UiSliceState {
    setShowImageModal: boolean;
    setShowCommentModal: boolean;
    setShowEditProfileModal: boolean;
    setShowEditImageModal:boolean
    setShowDeleteImageModal:boolean;

}

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        setShowImageModal: false,
        setShowCommentModal: false,
        setShowEditProfileModal: false,
        setShowEditImageModal: false,
        setShowDeleteImageModal: false,

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
        showEditImageModal(state) {
            state.setShowEditImageModal = true;            
        },
        closeEditImageModal(state) {
            state.setShowEditImageModal = false;
        },
        showDeleteImageModal(state) {
            state.setShowDeleteImageModal = true;            
        },
        closeDeleteImageModal(state) {
            state.setShowDeleteImageModal = false;
        },
    },
});
export const {
    showAddImageModal, closeAddImageModal,
    showCommentModal, closeCommentModal,
    showEditProfileModal, closeEditProfileModal,
    showEditImageModal, closeEditImageModal,
    showDeleteImageModal, closeDeleteImageModal } = uiSlice.actions
export default uiSlice.reducer;