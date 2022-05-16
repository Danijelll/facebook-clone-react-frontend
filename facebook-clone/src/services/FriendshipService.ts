import { useDispatch } from "react-redux";
import { toggleErrorModal } from "../features/Ui/UiSlice";
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
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
            });
    }

    getAllIncomingFriendRequests(page: number) {
        return axios.get('/friendRequests/?pageSize=10&pageNumber=' + page)
            .then(function (response) {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
            });
    }

    deleteFriendRequest(friendId: number) {
        return axios.delete('/deleteRequest/' + friendId)
            .then().catch(function (error) {
                console.log(error);
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
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
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
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
                const dispatch = useDispatch();
                dispatch(toggleErrorModal())
            });
    }
}

export default new FriendshipService