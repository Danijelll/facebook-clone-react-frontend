import axios from "axios";

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL:"https://localhost:5001",
    headers: {
        Authorization: 'Bearer '.concat(token ?? '')
    }
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    config.headers = { ...config.headers, Authorization: 'Bearer '.concat(token ?? '') };

    return config;
});

export default axiosInstance;