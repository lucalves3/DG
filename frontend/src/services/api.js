import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 4000,
  headers: {
    'content-type': 'application/json',
  },
});

export const fetcher = (url) => api.get(url).then((res) => res.data);

api.interceptors.request.use(
  function (config) {
    const token =
      JSON.parse(localStorage.getItem('@token')) ||
      JSON.parse(sessionStorage.getItem('@token'));
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.defaults.headers.withCredentials = true;

export default api;

export { api };
