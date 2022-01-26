import api from "./api"
export default {
    get: (type) => {
        return api.get(`/user/v2/${type}`);
    },
}