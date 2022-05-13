import { ICommentUpdateData, ICommentUploadData } from "../interfaces/IComment";
import axios from "./axios";


class CommentService {
    getAllAlbumComments(albumId: number, page: number) {
        return axios.get('/comments/album/' + albumId + '?pageSize=10&pageNumber=' + page)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    getCommentById(commentId: number) {
        return axios.get('/comments/' + commentId)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    uploadComment(comment: ICommentUploadData) {
        return axios.post('/comments', comment)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    deleteCommentById(commentId: number) {
        return axios.delete('/comments/' + commentId)
            .then(function (response) {

            }).catch(function (error) {
                console.log(error);
            });
    }
    
    updateComment(comment: ICommentUpdateData) {
        return axios.put('/comments', comment)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new CommentService