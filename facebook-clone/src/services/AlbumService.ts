import { useDispatch } from "react-redux";
import { toggleErrorModal } from "../features/Ui/UiSlice";
import axios from "./axios";

class AlbumService {
    getAllCurrentUserAlbums(userId: number) {
        return axios.get('/albums/search/' + userId + '?pageSize=9999&pageNumber=0')
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

    getCurrentOpenAlbum(albumId: number) {
        return axios.get('/albums/' + albumId)
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

    getAllFriendsAlbumsWithImages(postsPerPage: number, page: number) {
        return axios.get('/feed?pageSize=' + postsPerPage + '&pageNumber=' + page)
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

    deleteAlbumById(albumId: number) {
        return axios.delete('/albums/' + albumId)
            .catch(function (error) {
                console.log(error);
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
            });
    }

    updateAlbumCaption(albumUpdateData: any) {
        return axios.put('/albums', albumUpdateData)
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

export default new AlbumService