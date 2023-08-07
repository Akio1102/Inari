import axios from "./axios";

export const getCategorysRequest = () => axios.get("/categorias");

export const getOneCategoryRequest = (id) => axios.get(`/categorias/${id}`);

export const createCategorysRequest = (category) =>
  axios.post("/categorias", category);

export const updateCategorysRequest = (id, category) =>
  axios.put(`/categorias/${id}`, category);

export const deleteCategorysRequest = (id) => axios.delete(`/categorias/${id}`);
