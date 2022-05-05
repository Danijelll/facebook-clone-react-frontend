import { IUploadImageData } from "../interfaces/IImage";
import axios from "./axios";


class ImageService {
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
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new ImageService