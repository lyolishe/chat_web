import axios from 'axios';

const BASE_URL = 'https://localhost:5001/api';

axios.interceptors.request.use(config => {
    config.withCredentials = true;

    if (!config.url?.includes(BASE_URL)) {
        config.url = `${BASE_URL}/${config.url}`;
    }

    return config;
})

export default axios