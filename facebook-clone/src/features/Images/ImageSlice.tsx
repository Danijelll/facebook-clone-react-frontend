import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUploadImageData } from "../../interfaces/IImage";
import ImageService from "../../services/ImageService";

export interface ImageSliceState {
    userImages: Array<IUploadImageData>;

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
    initialState: {
        userImages: [undefined]
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImages.fulfilled, (state, action) => {
            state.userImages.push(action.payload);            
        })
    },
});

export { uploadImages }
export default imageSlice.reducer;