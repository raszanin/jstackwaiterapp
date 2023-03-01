import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.70.92:3333/',
});
