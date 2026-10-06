import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const app = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

const http = {
    post: app.post,
    get: app.get,
    patch: app.patch,
    put: app.put,
    delete: app.delete
};

export default http;