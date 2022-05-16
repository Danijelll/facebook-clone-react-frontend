import { toggleErrorModal } from "../features/Ui/UiSlice";
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
                this.store.dispatch(toggleErrorModal())
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
                this.store.dispatch(toggleErrorModal())
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
                this.store.dispatch(toggleErrorModal())
            });
    }

    deleteAlbumById(albumId: number) {
        return axios.delete('/albums/' + albumId)
            .catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
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
                this.store.dispatch(toggleErrorModal())
            });
    }
}

export default new AlbumService