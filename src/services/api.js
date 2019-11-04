import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodeapiteste.herokuapp.com'
});

export default api;