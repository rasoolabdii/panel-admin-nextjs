import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const app = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

app.interceptors.request.use(
    (res) => res , 
    (error) => Promise.reject(error)
);

app.interceptors.response.use(
    (res) => res ,
    async (err) => {
        const originalConfig = err.config;
        if(err?.response?.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/refresh-token`, {withCredentials: true});
                if(data) {
                    return app(originalConfig);
                }
            }
            catch(error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(err);
    }
);

const http = {
    post: app.post,
    get: app.get,
    patch: app.patch,
    put: app.put,
    delete: app.delete
};

export default http;