import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://api-ame.herokuapp.com',
});

export default api;


