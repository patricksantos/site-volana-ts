import api from "./api";
export async function getPlayerWeekly() {
    let response = await api.get(`/media/diaria/slp`)
    if (response.status === 200) {
        return response.data
    }
}

export async function subscribePlayer(data) {
    try {
        let response = await api.post(`/candidato`, data)
        return response.status
    } catch (error) {
        return 401
    }
}