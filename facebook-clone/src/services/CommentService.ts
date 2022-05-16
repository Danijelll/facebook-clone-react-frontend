import { useDispatch } from "react-redux";
import { toggleErrorModal } from "../features/Ui/UiSlice";
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
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
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
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
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
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
            });
    }

    deleteCommentById(commentId: number) {
        return axios.delete('/comments/' + commentId)
            .then(function (response) {

            }).catch(function (error) {
                console.log(error);
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
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
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
            });
    }
}

export default new CommentService