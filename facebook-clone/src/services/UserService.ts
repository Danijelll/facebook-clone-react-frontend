import axios from "./axios";
import { ILogin, IRegister, IUserUpdateCoverImageData, IUserUpdateProfileImageData } from "../interfaces/IUser";
import { showErrorModal } from "../features/Ui/UiSlice";
import { addNewCurrentError } from "../features/Error/ErrorSlice";
import { IErrorData } from "../interfaces/IError";

class UserService {
    store: any;

    injectStore(store: any) {
        this.store = store;
    }

    login(user: ILogin) {
        return axios.post('/login', user)
            .then((response) => {
                if (response.status === 200) {
                    return true;
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

    register(user: IRegister) {
        return axios.post('/register', user)
            .then((response) => {
                if (response.status === 200) {
                    return true;
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

    confirm2FA(username: string, twoFactorCode: string) {
        return axios.post('/login/' + username + '/' + twoFactorCode,)
            .then((response) => {
                localStorage.setItem('token', response.data)
                if (response.status === 200) {
                    return true;
                }
            }).catch((error) => {
                console.log(error);
                const errorData: IErrorData = {
                    errorMessage: error.response.data.message,
                    errorStatus: error.response.status,
                }
                this.store.dispatch(addNewCurrentError(errorData))
                this.store.dispatch(showErrorModal())
            });
    }

    getCurrentUserData() {
        return axios.get('/home')
            .then((response) => {
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

    getUserByUsername(username: string | undefined, page: number) {
        return axios.get('/users/search/' + username + '?pageSize=18&pageNumber=' + page)
            .then((response) => {
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

    getUserByUsernameWithBanned(username: string | undefined, page: number) {
        return axios.get('users/searchWithBanned/' + username + '?pageSize=18&pageNumber=' + page)
            .then((response) => {
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

    getUserById(id: number) {
        return axios.get('/users/' + id)
            .then((response) => {
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

    editUserProfileImage(data: IUserUpdateProfileImageData) {

        const formData = new FormData();
        formData.append('profileImage', data.profileImage);

        return axios.put('/updateProfileImage', formData)
            .then((response) => {
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

    unbanUser(id: number) {
        return axios.put('/unbanUser/' + id)
            .then((response) => {
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

    banUser(id: number) {
        return axios.put('/banUser/' + id)
            .then((response) => {
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

    editUserCoverImage(data: IUserUpdateCoverImageData) {

        const formData = new FormData();
        formData.append('coverImage', data.coverImage);

        return axios.put('/updateCoverImage', formData)
            .then((response) => {
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

    logout() {
        return localStorage.removeItem('token')
    }
}


export default new UserService;