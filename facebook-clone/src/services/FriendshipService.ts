import axios from "./axios";


class FriendshipService {
    sendFriendRequest(friendId: number) {
        return axios.post('/addFriend/' + friendId)
            .then(function (response) {
                localStorage.getItem('token')
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return true;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
    checkFriendRequestStatus(friendId: number) {
        return axios.get('/friendRequestStatus/' + friendId)
            .then(function (response) {
                localStorage.getItem('token')
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new FriendshipService