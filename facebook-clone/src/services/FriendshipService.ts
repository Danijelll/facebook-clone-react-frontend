import { FriendRequestStatusEnum } from "../Models/FriendRequestStatusEnum";
import axios from "./axios";


class FriendshipService {
    sendFriendRequest(friendId: number) {
        return axios.post('/addFriend/' + friendId)
            .then(function (response) {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
    
    deleteFriendRequest(friendId: number) {
        return axios.delete('/deleteRequest/' + friendId)
            .then().catch(function (error) {
                console.log(error);
            });
    }

    confirmFriendRequest(friendId: number) {
        return axios.put('/confirmFriend/' + friendId)
            .then(function (response) {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    checkFriendRequestStatus(friendId: number) {
        return axios.get('/friendRequestStatus/' + friendId)
            .then(function (response) {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new FriendshipService