import { toggleErrorModal } from "../features/Ui/UiSlice";
import { ICommentUpdateData, ICommentUploadData } from "../interfaces/IComment";
import axios from "./axios";

class CommentService {
    store: any;

    injectStore(store: any) {
        this.store = store;
    }
    getAllAlbumComments(albumId: number, page: number) {
        return axios.get('/comments/album/' + albumId + '?pageSize=10&pageNumber=' + page)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    getCommentById(commentId: number) {
        return axios.get('/comments/' + commentId)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    uploadComment(comment: ICommentUploadData) {
        return axios.post('/comments', comment)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    deleteCommentById(commentId: number) {
        return axios.delete('/comments/' + commentId)
            .then((response) => {
                if (response.status === 200) {
                    return true;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    updateComment(comment: ICommentUpdateData) {
        return axios.put('/comments', comment)
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

export default new CommentService