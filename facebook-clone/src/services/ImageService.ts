import { addNewCurrentError } from "../features/Error/ErrorSlice";
import { showErrorModal } from "../features/Ui/UiSlice";
import { IErrorData } from "../interfaces/IError";
import { IUploadImageData } from "../interfaces/IImage";
import axios from "./axios";

class ImageService {
    store: any;

    injectStore(store: any) {
        this.store = store;
    }
    uploadImages(data: IUploadImageData) {

        const imageUploadData = {
            userId: data.userId,
            caption: data.caption
        };

        const formData = new FormData();
        formData.append('data', JSON.stringify(imageUploadData));

        for (let i = 0; i < data.images.length; i++) {
            formData.append('image', data.images[i]);
        }

        return axios.post('/albums', formData)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
            });
    }
}

export default new ImageService