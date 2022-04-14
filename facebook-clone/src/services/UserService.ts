import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { ILogin, IRegister } from "../interfaces/IUser";

class UserService {

    async login(user: ILogin) {
        return axios.post('/login', user)
            .then(function (response) {
                localStorage.setItem('token', response.data)
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return true;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
    async register(user: IRegister) {
        return axios.post('/register', user)
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    return true;
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
    async getCurrentUserData() {
        return axios.get('/home')
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    console.log(response.data);
                    return response.data;
                    
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new UserService;