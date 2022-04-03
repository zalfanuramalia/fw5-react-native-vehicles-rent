import axios from 'axios';

const {REACT_APP_BACKEND_URL} = process.env;

const http = token => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: 'http://192.168.1.6:5000',
    headers,
  });
};

export default http;
