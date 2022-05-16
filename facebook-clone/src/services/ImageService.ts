import { toggleErrorModal } from "../features/Ui/UiSlice";
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
                this.store.dispatch(toggleErrorModal())
            });
    }
}

export default new ImageService