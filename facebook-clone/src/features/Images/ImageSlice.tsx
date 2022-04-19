import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IImageData, IUploadImageData } from "../../interfaces/IImage";
import ImageService from "../../services/ImageService";

export interface ImageSliceState {
    userImages: Array<IImageData>;
}

const uploadImages = createAsyncThunk(
    'images/uploadImages',
    async (data: IUploadImageData) => {
        const response = await ImageService.uploadImages(data);
        return response;
    }
)

const getAllCurrentUserImages = createAsyncThunk(
    'images/getAllCurrentUserImages',
    async (userId : number) => {
        const response = await ImageService.getAllCurrentUserImages(userId);
        return response;
    }
)

export const imageSlice = createSlice({
    name: "image",
    initialState: { userImages: {} },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImages.fulfilled, (state, action) => {})
        builder.addCase(getAllCurrentUserImages.fulfilled, (state, action) => {
            state.userImages = action.payload;
        })

    },
});

export { uploadImages, getAllCurrentUserImages }
export default imageSlice.reducer;