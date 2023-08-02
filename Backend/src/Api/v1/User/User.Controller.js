import usuariosService from "./User.Service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/sendResponse.js";
import { createToken } from "../Helpers/Token.js";

const getAllUsuarios = async (req, res) => {
  try {
    const allUsuarios = await usuariosService.getAllUsuarios();
    if (allUsuarios.length > 0) {
      sendSuccessResponse(res, allUsuarios, "Usuarios encontrados");
    } else {
      sendErrorResponse(res, "No hay Usuarios", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneUsuario = async (req, res) => {
  try {
    const OneUsuario = await usuariosService.getOneUsuario(
      req.params.usuarioId
    );
    if (OneUsuario) {
      sendSuccessResponse(res, OneUsuario, "Usuario encontrado");
    } else {
      sendErrorResponse(res, "No Existe ese Usuario", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewUsuario = async (req, res) => {
  try {
    const createdUsuario = await usuariosService.createNewUsuario(req.body);
    // const token = await createToken(req.body);
    // console.log("Token generado:", token);
    sendSuccessResponse(res, createdUsuario, "Usuario Creado", 201);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneUsuario = async (req, res) => {
  try {
    const updatedUsuario = await usuariosService.updateOneUsuario(
      req.params.usuarioId,
      req.body
    );
    if (updatedUsuario) {
      sendSuccessResponse(res, updatedUsuario, "Usuario Actualizado");
    } else {
      sendErrorResponse(res, "Usuario no encontrado", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneUsuario = async (req, res) => {
  try {
    const deletedUsuario = await usuariosService.deleteOneUsuario(
      req.params.usuarioId
    );
    if (deletedUsuario) {
      sendSuccessResponse(res, deletedUsuario, "Usuario Eliminado");
    } else {
      sendErrorResponse(res, "Usuario no encontrado", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getAllUsuarios,
  getOneUsuario,
  createNewUsuario,
  updateOneUsuario,
  deleteOneUsuario,
};
