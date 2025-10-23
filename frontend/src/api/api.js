import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const getProfile = () => axios.get(`${BASE_URL}/api/profile`);
export const getProjects = () => axios.get(`${BASE_URL}/api/projects`);
// export const getArticles = () => axios.get(`${BASE_URL}/api/articles`);
// export const getArticleBySlug = (slug) => axios.get(`${BASE_URL}/api/articles/${slug}`);
export const getArticles = () => axios.get(`${BASE_URL}/api/articles`);
export const getArticleBySlug = (slug) => axios.get(`${BASE_URL}/api/articles/${slug}`);
export const sendContact = (payload) => axios.post(`${BASE_URL}/api/contact`, payload);
export const getAbout = () => axios.get(`${BASE_URL}/api/about`);