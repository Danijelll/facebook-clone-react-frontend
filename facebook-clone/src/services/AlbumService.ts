import axios from "./axios";


class AlbumService {
    getAllCurrentUserAlbums(userId: number) {
        return axios.get('/albums/search/' + userId + '?pageSize=0&pageNumber=0')
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
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
            });
    }

    getAllFriendsAlbumsWithImages(postsPerPage: number, page: number) {
        return axios.get('/feed?pageSize='+postsPerPage+'&pageNumber='+page)
            .then(function (response) {
                if (response.status === 200) {
                    console.log('/feed?pageSize='+postsPerPage+'&pageNumber='+page);
                    
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

    updateAlbumCaption(albumUpdateData: any) {
        return axios.put('/albums', albumUpdateData)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new AlbumService