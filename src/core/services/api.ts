import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: 'http://www.volana.adm.br:3333/'
    // baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async (config: any) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;