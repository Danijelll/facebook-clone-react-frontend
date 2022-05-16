import axios from "./axios";
import { ILogin, IRegister, IUserUpdateCoverImageData, IUserUpdateProfileImageData } from "../interfaces/IUser";
import { useDispatch } from "react-redux";
import { toggleErrorModal } from "../features/Ui/UiSlice";
// import { store } from '../features/store';

class UserService {
    store: any;

    injectStore(store: any) {
        this.store = store;
    }

    login(user: ILogin) {
        return axios.post('/login', user)
            .then((response) => {
                if (response.status === 200) {
                    this.store.dispatch(toggleErrorModal())
                    return true;
                }
            }).catch((error) => {
                console.log(error);
                this.store.dispatch(toggleErrorModal())
            });
    }

    register(user: IRegister) {
        return axios.post('/register', user)
            .then(function (response) {
                if (response.status === 200) {
                    return true;
                }
            }).catch(function (error) {
                console.log(error);
                // const dispatch = useDispatch();
                // dispatch(toggleErrorModal())
            });
    }

    confirm2FA(username: string, twoFactorCode: string) {
        return axios.post('/login/' + username + '/' + twoFactorCode,)
            .then(function (response) {

                localStorage.setItem('token', response.data)
                if (response.status === 200) {
                    return true;
                }
            }).catch(function (error) {
                console.log(error);
                // const dispatch = useDispatch();
                // dispatch(toggleErrorModal())
            });
    }

    getCurrentUserData() {
        return axios.get('/home')
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
                // const dispatch = useDispatch();
                // dispatch(toggleErrorModal())
            });
    }

    getUserByUsername(username: string | undefined, page: number) {
        return axios.get('/users/search/' + username + '?pageSize=18&pageNumber=' + page)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
                // const dispatch = useDispatch();
                // dispatch(toggleErrorModal())
            });
    }

    getUserByUsernameWithBanned(username: string | undefined, page: number) {
        return axios.get('users/searchWithBanned/' + username + '?pageSize=18&pageNumber=' + page)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
                // const dispatch = useDispatch();
                // dispatch(toggleErrorModal())
            });
    }

    getUserById(id: number) {
        return axios.get('/users/' + id)
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

    editUserProfileImage(data: IUserUpdateProfileImageData) {

        const formData = new FormData();
        formData.append('profileImage', data.profileImage);

        return axios.put('/updateProfileImage', formData)
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

    unbanUser(id: number) {
        return axios.put('/unbanUser/' + id)
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

    banUser(id: number) {
        return axios.put('/banUser/' + id)
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

    editUserCoverImage(data: IUserUpdateCoverImageData) {

        const formData = new FormData();
        formData.append('coverImage', data.coverImage);

        return axios.put('/updateCoverImage', formData)
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

    logout() {
        return localStorage.removeItem('token')
    }
}


export default new UserService;