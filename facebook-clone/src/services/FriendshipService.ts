import { toggleErrorModal } from "../features/Ui/UiSlice";
import axios from "./axios";

class FriendshipService {
    store: any;

    injectStore(store: any) {
        this.store = store;
    }
    sendFriendRequest(friendId: number) {
        return axios.post('/addFriend/' + friendId)
            .then((response) => {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    getAllIncomingFriendRequests(page: number) {
        return axios.get('/friendRequests/?pageSize=10&pageNumber=' + page)
            .then((response) => {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    deleteFriendRequest(friendId: number) {
        return axios.delete('/deleteRequest/' + friendId)
            .then().catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    confirmFriendRequest(friendId: number) {
        return axios.put('/confirmFriend/' + friendId)
            .then((response) => {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    checkFriendRequestStatus(friendId: number) {
        return axios.get('/friendRequestStatus/' + friendId)
            .then((response) => {
                localStorage.getItem('token')
                if (response.status === 200) {
                    return response.data;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }
}

export default new FriendshipService