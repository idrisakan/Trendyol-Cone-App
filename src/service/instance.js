import axios from 'axios';
import {BASE_URL} from './url';

const Client = axios.create();

Client.defaults.baseURL = BASE_URL;
Client.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
Client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export { Client };