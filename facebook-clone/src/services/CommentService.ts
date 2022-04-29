import { ICommentUploadData } from "../interfaces/IComment";
import axios from "./axios";


class CommentService {
    getAllAlbumComments(albumId: number) {
        return axios.get('/comments/album/' + albumId + '?pageSize=100&pageNumber=0')
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
    uploadComment(comment : ICommentUploadData) {
        return axios.post('/comments', comment)
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

export default new CommentService