import categoriasService from "../Services/Category.js";
import { handleResponse, sendErrorResponse } from "../Helpers/sendResponse.js";

const getAllCategorias = async (req, res) => {
  try {
    const allCategorias = await categoriasService.getAllCategorias();
    handleResponse(res, allCategorias);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const Onecategoria = await categoriasService.getOneCategoria(categoriaId);
    handleResponse(res, Onecategoria);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewCategoria = async (req, res) => {
  try {
    const createdCategory = await categoriasService.createNewCategoria(
      req.body
    );
    handleResponse(res, createdCategory);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const updatedCategory = await categoriasService.updateOneCategoria(
      categoriaId,
      req.body
    );
    handleResponse(res, updatedCategory);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const deletedCategory = await categoriasService.deleteOneCategoria(
      categoriaId
    );
    handleResponse(res, deletedCategory);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getAllCategorias,
  getOneCategoria,
  createNewCategoria,
  updateOneCategoria,
  deleteOneCategoria,
};
