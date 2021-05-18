import axios from 'axios';

const BASE_URL = 'https://localhost:5001/api';

axios.interceptors.request.use(config => {
    config.baseURL = BASE_URL;
    config.withCredentials = true;

    return config;
})
