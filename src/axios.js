import axios from 'axios';

const instance = axios.create({
  baseURL: "http://10.20.8.158:5002/api/v2/",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
