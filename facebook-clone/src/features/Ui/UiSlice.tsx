import { createSlice } from "@reduxjs/toolkit";

export interface UiSliceState {
    setShowImageModal: boolean;
    setShowCommentModal: boolean;
    setShowEditProfileModal: boolean;
    setShowEditImageModal: boolean
    setShowDeleteImageModal: boolean;
    setShowEditCommentModal: boolean;
    setShowUserSearchModal: boolean;
    setShowFriendRequestModal: boolean;
    setShowErrorModal: boolean,


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
        setShowFriendRequestModal: false,
        setShowErrorModal: false,
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
        toggleFriendRequestModal(state) {
            state.setShowFriendRequestModal = !state.setShowFriendRequestModal
        },
        toggleErrorModal(state) {
            state.setShowErrorModal = !state.setShowErrorModal
        }
    },
});
export const {
    toggleAddImageModal,
    toggleCommentModal,
    toggleEditProfileModal,
    toggleEditImageModal,
    toggleDeleteImageModal,
    toggleEditCommentModal,
    toggleUserSearchModal,
    toggleFriendRequestModal,
    toggleErrorModal } = uiSlice.actions
export default uiSlice.reducer;