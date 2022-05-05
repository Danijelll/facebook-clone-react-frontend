import axios from "./axios";


class AlbumService {
    getAllCurrentUserAlbums(userId: number) {
        return axios.get('/albums/search/' + userId + '?pageSize=0&pageNumber=0')
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    getCurrentOpenAlbum(albumId: number) {
        return axios.get('/albums/' + albumId)
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    deleteAlbumById(albumId: number) {
        return axios.delete('/albums/' + albumId) 
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new AlbumService