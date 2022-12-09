import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
});

const authToken = process.env.REACT_APP_AUTH_TOKEN;

instance.interceptors.response.use((response) => response.data);
instance.defaults.headers.common.Authorization = `Bearer ${authToken}`;

export default instance;
