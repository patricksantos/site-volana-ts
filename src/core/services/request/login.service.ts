import api from "../api";

export default {
  post: async <T>(email: string, password: string) => {
    return await api.post<T>('login', {
      email: email,
      password: password
    });
  },
}