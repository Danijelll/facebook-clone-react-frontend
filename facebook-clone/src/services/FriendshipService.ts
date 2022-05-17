import { addNewCurrentError } from "../features/Error/ErrorSlice";
import { showErrorModal } from "../features/Ui/UiSlice";
import { IErrorData } from "../interfaces/IError";
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
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
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
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
            });
    }

    deleteFriendRequest(friendId: number) {
        return axios.delete('/deleteRequest/' + friendId)
            .then().catch((error) => {
                console.log(error);
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
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
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
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
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
            });
    }
}

export default new FriendshipService