import { addNewCurrentError } from "../features/Error/ErrorSlice";
import { showErrorModal } from "../features/Ui/UiSlice";
import { IErrorData } from "../interfaces/IError";
import axios from "./axios";

class AlbumService {
    store: any;

    injectStore(store: any) {
        this.store = store;
    }
    getAllCurrentUserAlbums(userId: number) {
        return axios.get('/albums/search/' + userId + '?pageSize=9999&pageNumber=0')
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

    getCurrentOpenAlbum(albumId: number) {
        return axios.get('/albums/' + albumId)
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

    getAllFriendsAlbumsWithImages(postsPerPage: number, page: number) {
        return axios.get('/feed?pageSize=' + postsPerPage + '&pageNumber=' + page)
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

    deleteAlbumById(albumId: number) {
        return axios.delete('/albums/' + albumId)
            .catch((error) => {
                console.log(error);
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
            });
    }

    updateAlbumCaption(albumUpdateData: any) {
        return axios.put('/albums', albumUpdateData)
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

export default new AlbumService