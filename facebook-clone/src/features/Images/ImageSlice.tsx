import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUploadImageData } from "../../interfaces/IImage";
import ImageService from "../../services/ImageService";

export interface ImageSliceState {
}

const uploadImages = createAsyncThunk(
    'images/uploadImages',
    async (data: IUploadImageData) => {
        const response = await ImageService.uploadImages(data);
        return response;
    }
)

export const imageSlice = createSlice({
    name: "image",
    initialState: { userImages: {} },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImages.fulfilled, (state, action) => { })
    },
});

export { uploadImages }
export default imageSlice.reducer;