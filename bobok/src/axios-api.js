import axios from 'axios';

const regionsApi = axios.create({
    baseURL: "http://localhost:8000"
});

export default regionsApi;