import axios from "axios";
import Cookies from "js-cookie";
import router from "@/router";


const api = axios.create({
    baseURL: `/api/v1/${Cookies.get('spc')}`,
    withCredentials: true,
    timeout: 10000,
    headers: {"X-Auth-Token": Cookies.get("token")}
})
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        if (typeof Cookies.get("token") === "undefined" && err.status === 401) {
            router.push("/notLogin").then(() => {
                console.error("notLogin error", err.message.status);
            });
        }
        else if (typeof Cookies.get("token") === "string" && err.status === 401) {
            router.push("/tokenExpired").then(() => {
                console.error("tokenExpired error", err.message.status);
            });
        }
        return Promise.reject(err);
    }
)

export const get = (url: any, params: any = {}) => {
    return api.get(url, params);
}
export const post = (url: any, params: any = {}) => {
    return api.post(url, params);
}
export const put = (url: any, params?: any, config?: any) => {
    return api.put(url, params, config);
}
export const del = (url: any, params: any = {}) => {
    return api.delete(url, params);
}
