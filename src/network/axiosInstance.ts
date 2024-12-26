import store from '@store';
import axios from 'axios';
import {API_KEY, BASE_URL} from './apiConstant';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: API_KEY,
  },
});

axiosInstance.interceptors.request.use(config => {
  const state = store.getState();
  const token = state.auth.token;
  if (token) {
    config.headers.set('token', `Token ${token}`);
  }
  return config;
});

// Define common API methods
const _get = (url: string, data?: {}) => {
  return axiosInstance.get(url, data);
};

const _delete = (url: string, data?: {}) => {
  return axiosInstance.delete(url, data);
};

const _put = (url: string, data = {}, config?: {}) => {
  return axiosInstance.put(url, data, config);
};

const _post = (url: string, data = {}, config?: {}) => {
  return axiosInstance.post(url, data);
};

// Export API methods
export {_delete, _get, _post, _put};
