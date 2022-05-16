import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { ILogin, IRegister, IUserUpdateCoverImageData, IUserUpdateProfileImageData } from "../interfaces/IUser";

class UserService {

    login(user: ILogin) {
        return axios.post('/login', user)
            .then(function (response) {
                if (response.status === 200) {
                    return true;
                }
            }).catch(function (error) {
                console.log(error);
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
            });
    }

    getUserByUsername(username: string|undefined, page: number) {
        return axios.get('/users/search/' + username + '?pageSize=0&pageNumber=' + page)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    getUserByUsernameWithBanned(username: string|undefined, page: number) {
        return axios.get('users/searchWithBanned/' + username + '?pageSize=0&pageNumber=' + page)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
            }).catch(function (error) {
                console.log(error);
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
            });

    }

    logout() {
        return localStorage.removeItem('token')

    }
}


export default new UserService;