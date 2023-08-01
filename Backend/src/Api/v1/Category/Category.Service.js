import Categorias from "./Category.Schema.js";

const getAllCategorias = async () => {
  return await Categorias.find();
};

const getOneCategoria = async (categoriaID) => {
  return await Categorias.findById(categoriaID);
};

const createNewCategoria = async (newCategoriaData) => {
  return await Categorias.create(newCategoriaData);
};

const updateOneCategoria = async (categoriaID, categoriaData) => {
  return await Categorias.findByIdAndUpdate(categoriaID, categoriaData, {
    new: true,
  });
};

const deleteOneCategoria = async (categoriaID) => {
  return await Categorias.findByIdAndDelete(categoriaID);
};

export default {
  getAllCategorias,
  getOneCategoria,
  createNewCategoria,
  updateOneCategoria,
  deleteOneCategoria,
};
