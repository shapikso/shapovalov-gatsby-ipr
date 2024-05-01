import axios from "axios";
import {getAccessToken} from "./sessionStorageServices";

const marketplace = axios.create({
    baseURL: 'http://localhost:5000'
});

marketplace.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${getAccessToken()}`;
    return request;
}, (error) => {
    return Promise.reject(error);
});

marketplace.interceptors.response.use(({data}) => {
    return data;
}, (error) => {
    return Promise.reject(error);
});
export default marketplace;