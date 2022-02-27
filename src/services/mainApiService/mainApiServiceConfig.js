import axios from 'axios';

export const baseUrl = process.env.REACT_APP_API_URL;

export const mainService = axios.create();

mainService.interceptors.request.use(
    async (config) => {
        config.headers = {
            // Authorization: getAccessToken(),
            Accept: 'application/json',
            // apiKey: process.env.REACT_APP_API_KEY,
            withCredentials: true
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
