import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { ILogin, IRegister, IUserUpdateCoverImageData, IUserUpdateProfileImageData } from "../interfaces/IUser";

class UserService {

    login(user: ILogin) {
        return axios.post('/login', user)
            .then(function (response) {
                localStorage.setItem('token', response.data)
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

    getUserByUsername(username: string) {
        return axios.get('/users/search/' + username)
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
}


export default new UserService;