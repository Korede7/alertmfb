import axios from "axios";

export const API_URL = import.meta.env.VITE_STRAPI_URL;

export const API = axios.create({
  baseURL: `${API_URL}/api`,
});