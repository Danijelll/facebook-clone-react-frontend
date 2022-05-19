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
    setShowFriendModal: boolean;
    setShowChatModal: boolean;
    setShowErrorModal: boolean;


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
        setShowFriendModal: false,
        setShowChatModal: false,
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
            state.setShowFriendRequestModal = !state.setShowFriendRequestModal;
        },
        toggleFriendModal(state) {
            state.setShowFriendModal = !state.setShowFriendModal;
        },
        toggleChatModalModal(state) {
            state.setShowChatModal = !state.setShowChatModal;
        },
        showErrorModal(state) {
            state.setShowErrorModal = true;
        },
        closeErrorModal(state) {
            state.setShowErrorModal = false;
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
    toggleFriendModal,
    toggleChatModalModal,
    showErrorModal,
    closeErrorModal } = uiSlice.actions
export default uiSlice.reducer;