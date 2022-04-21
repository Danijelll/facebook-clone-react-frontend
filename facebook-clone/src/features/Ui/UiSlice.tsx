import { createSlice } from "@reduxjs/toolkit";

export interface UiSliceState {
    setShowModal: boolean;

}

export const uiSlice = createSlice({
    name: "ui",
    initialState: { setShowModal: false },
    reducers: {
        showModal(state) {
            state.setShowModal = true;
        },
        closeModal(state) {
            state.setShowModal = false;
        },
    },
});
export const { showModal, closeModal } = uiSlice.actions
export default uiSlice.reducer;