import api from "../api";

export async function getContaValue(id) {
  let response = await api.get(`/historico/conta/${id}/chart`);
  if (response) return response.data[0];
}

export async function getPlayersAverage() {
    let response = await api.get(`/media/diaria`)
    if (response) return response.data[0];
}
