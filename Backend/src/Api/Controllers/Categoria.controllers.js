import categoriasService from "../Services/CategoriaService.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/sendResponse.js";

const getAllCategorias = async (req, res) => {
  try {
    const allCategorias = await categoriasService.getAllCategorias();
    if (allCategorias.length > 0) {
      sendSuccessResponse(res, allCategorias, "Categorias encontradas");
    } else {
      sendSuccessResponse(res, allCategorias, "No hay Categorias", 204);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneCategoria = async (req, res) => {
  try {
    const Onecategoria = await categoriasService.getOneCategoria(
      req.params.categoriaId
    );
    if (Onecategoria) {
      sendSuccessResponse(res, Onecategoria, "Categoria encontrada");
    } else {
      sendSuccessResponse(res, null, "No Existe esa Categoria", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewCategoria = async (req, res) => {
  try {
    const createdCategoria = await categoriasService.createNewCategoria(
      req.body
    );
    sendSuccessResponse(res, createdCategoria, "Categoria Creada", 201);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneCategoria = async (req, res) => {
  try {
    const updatedCategoria = await categoriasService.updateOneCategoria(
      req.params.categoriaId,
      req.body
    );
    if (updatedCategoria) {
      sendSuccessResponse(res, updatedCategoria, "Categoria Actualizada");
    } else {
      sendSuccessResponse(res, null, "Categoria no encontrada", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneCategoria = async (req, res) => {
  try {
    const deletedCategoria = await categoriasService.deleteOneCategoria(
      req.params.categoriaId
    );
    if (deletedCategoria) {
      sendSuccessResponse(res, deletedCategoria, "Categoria Eliminada");
    } else {
      sendSuccessResponse(res, null, "Categoria no encontrada", 404);
    }
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
