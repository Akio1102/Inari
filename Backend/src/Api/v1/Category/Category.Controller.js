import categoriasService from "./Category.Service.js";
import {
  handleUsuariosResponse,
  sendErrorResponse,
} from "../Helpers/sendResponse.js";

const getAllCategorias = async (req, res) => {
  try {
    const allCategorias = await transaccionesService.getAllCategorias();
    handleUsuariosResponse(res, allCategorias);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const Onecategoria = await categoriasService.getOneCategoria(
      categoriaId
    );
    handleUsuariosResponse(res, Onecategoria);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewCategoria = async (req, res) => {
  try {
    const createdTransaccion = await categoriasService.createNewCategoria(
      req.body
    );
    handleUsuariosResponse(res, createdTransaccion);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const updatedUsuario = await categoriasService.updateOneCategoria(
      categoriaId,
      req.body
    );
    handleUsuariosResponse(res, updatedUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneCategoria = async (req, res) => {
  try {
    const { transaccionId } = req.params;
    const deletedTransaccion = await categoriasService.deleteOneCategoria(
      transaccionId
    );
    handleUsuariosResponse(res, deletedTransaccion);
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
