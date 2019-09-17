import axios from 'axios';
import config from '../../../config';

const api = axios.create({
  baseURL: config.apis.swapi.url,
});

export default api;
