import axios from "./axios";


class AlbumService {
    getAllCurrentUserAlbums(userId: number) {
        return axios.get('/albums/search/' + userId + '?pageSize=0&pageNumber=0')
            .then(function (response) {
                return response.data;

            }).catch(function (error) {
                console.log(error);
            });
    }
    
    getAllAlbumComments(albumId: number) {
        return axios.get('/comments/album/' + albumId + '?pageSize=0&pageNumber=0')
            .then(function (response) {
                return response.data;

            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new AlbumService