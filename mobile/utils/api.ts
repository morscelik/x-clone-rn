import axios, { AxiosInstance } from "axios";
import { useAuth } from "@clerk/clerk-expo";

const API_BASE_URL = "https://x-clone-rn-six-xi.vercel.app/api"

export const createApiClient = ( getToken: ()=> Promise<string | null> ): AxiosInstance => {
    const api = axios.create({ baseURL: API_BASE_URL });
    console.log("SYNC URL:", API_BASE_URL + '/users/sync');
    api.interceptors.request.use(async (config) => {
        const token = await getToken();
        
        console.log("TOKEN:", token);
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    return api;
}

export const useApiClient = ():AxiosInstance => {
    const {getToken} = useAuth();
    return createApiClient(getToken);
}

export const userApi = {
    syncUser: (api: AxiosInstance) => api.post('/users/sync'),
    getCurrentUser: (api: AxiosInstance) => api.get('/users/me'),
    updateProfle: (api: AxiosInstance, data: any) => api.put('/users/profile', data),
}