import axios from "./axios";

export const registerRequest = (user) => axios.post(`/usuario`, user);

export const loginRequest = (user) => axios.post(`/usuario/Login`, user);

export const verityTokenRequest = () => axios.get("/verify");

export const logoutRequest = (user) => axios.post(`/usuario/Logout`, user);
