import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_GSMART_BASE_URL,
  withCredentials: true,
});

export default instance;
