import { createSlice } from "@reduxjs/toolkit";

export interface UiSliceState {
    setShowImageModal: boolean;
    setShowCommentModal: boolean;
    setShowEditProfileModal: boolean;
    setShowEditImageModal: boolean
    setShowDeleteImageModal: boolean;
    setShowEditCommentModal: boolean;
    setShowUserSearchModal: boolean;

}

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        setShowImageModal: false,
        setShowCommentModal: false,
        setShowEditProfileModal: false,
        setShowEditImageModal: false,
        setShowDeleteImageModal: false,
        setShowEditCommentModal: false,
        setShowUserSearchModal: false,

    },
    reducers: {
        toggleCommentModal(state) {
            state.setShowCommentModal = !state.setShowCommentModal;
        },
        toggleAddImageModal(state) {
            state.setShowImageModal = !state.setShowImageModal;
        },
        toggleEditProfileModal(state) {
            state.setShowEditProfileModal = !state.setShowEditProfileModal;
        },
        toggleEditImageModal(state) {
            state.setShowEditImageModal = !state.setShowEditImageModal;
        },
        toggleDeleteImageModal(state) {
            state.setShowDeleteImageModal = !state.setShowDeleteImageModal;
        },
        toggleEditCommentModal(state) {
            state.setShowEditCommentModal = !state.setShowEditCommentModal;
        },
        toggleUserSearchModal(state) {
            state.setShowUserSearchModal = !state.setShowUserSearchModal;
        },
    },
});
export const {
    toggleAddImageModal,
    toggleCommentModal,
    toggleEditProfileModal,
    toggleEditImageModal,
    toggleDeleteImageModal,
    toggleEditCommentModal,
    toggleUserSearchModal } = uiSlice.actions
export default uiSlice.reducer;