import categoriasService from "./Category.Service.js";
import {
  handleUsuariosResponse,
  sendErrorResponse,
} from "../Helpers/sendResponse.js";

const getAllCategorias = async (req, res) => {
  try {
    const allCategorias = await categoriasService.getAllCategorias();
    handleUsuariosResponse(res, allCategorias);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const Onecategoria = await categoriasService.getOneCategoria(categoriaId);
    handleUsuariosResponse(res, Onecategoria);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewCategoria = async (req, res) => {
  try {
    const createdCategory = await categoriasService.createNewCategoria(
      req.body
    );
    handleUsuariosResponse(res, createdCategory);
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
    handleUsuariosResponse(res, updatedCategory);
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
    handleUsuariosResponse(res, deletedCategory);
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
