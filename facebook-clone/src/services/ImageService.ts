import { IUploadImageData } from "../interfaces/IImage";
import axios from "./axios";


class ImageService {
    uploadImages(data: IUploadImageData) {

        const imageUploadData = {
            userId: data.userId,
            caption: data.caption
        };

        console.log(imageUploadData);
        

        const formData = new FormData();

        formData.append('data', JSON.stringify(imageUploadData));

        console.log(formData);
        

        for (let i = 0; i < data.images.length; i++) {
            formData.append('image', data.images[i]);
        }

        return axios.post('/albums', formData)
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return true;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new ImageService