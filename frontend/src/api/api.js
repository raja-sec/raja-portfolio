// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// export const getProfile = () => axios.get(`${BASE_URL}/api/profile`);
// export const getProjects = () => axios.get(`${BASE_URL}/api/projects`);
// export const getArticles = () => axios.get(`${BASE_URL}/api/articles`);
// export const getArticleBySlug = (slug) => axios.get(`${BASE_URL}/api/articles/${slug}`);
// export const sendContact = (payload) => axios.post(`${BASE_URL}/api/contact`, payload);
// export const getAbout = () => axios.get(`${BASE_URL}/api/about`);


import axios from "axios";

// This is the key logic:
// 1. In production (Vercel), VITE_API_URL will be your Render URL.
// 2. In development (local), it will be an empty string, allowing
//    Vite's proxy (in vite.config.js) to handle the /api requests.
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

// Create a single, pre-configured axios instance
const api = axios.create({
  baseURL: API_BASE_URL
});

// All your API calls now use this instance.
// When local, api.get('/api/profile') requests "/api/profile" (proxied).
// When live, api.get('/api/profile') requests "https://[your-render-url]/api/profile".
export const getProfile = () => api.get('/api/profile');
export const getProjects = () => api.get('/api/projects');
export const getArticles = () => api.get('/api/articles');
export const getArticleBySlug = (slug) => api.get(`/api/articles/${slug}`);
export const sendContact = (payload) => api.post('/api/contact', payload);
export const getAbout = () => api.get('/api/about');
