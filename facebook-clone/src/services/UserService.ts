import axios from "./axios";
import { useNavigate } from "react-router-dom";

class UserService{

    async login(user: any) {
        return axios.post('/login', user)
            .then(function (response) {
                localStorage.setItem('token', response.data)
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    useNavigate()("/home");
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new UserService;