import axios from "axios";

export const api_key = "eeb1d3cc7b2e460795b19c9b5961e772";
const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({ baseURL: BASE_URL });

// api.interceptors.request.use((config)=>{
//     config.params =config.params || {};
//     config.params["api_key"]=api_key;
//     return config

// })

export default api;
