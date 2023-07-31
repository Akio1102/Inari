import usuariosService from "../Services/UsuarioService.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/sendResponse.js";

const getAllUsuarios = async (req, res) => {
  try {
    const allUsuarios = await usuariosService.getAllUsuarios();
    if (allUsuarios.length > 0) {
      sendSuccessResponse(res, allUsuarios, "Usuarios encontrados");
    } else {
      sendSuccessResponse(res, allUsuarios, "No hay Usuarios", 204);
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
      sendSuccessResponse(res, null, "No Existe ese Usuario", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewUsuario = async (req, res) => {
  try {
    const createdUsuario = await usuariosService.createNewUsuario(req.body);
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
      sendSuccessResponse(res, null, "Usuario no encontrado", 404);
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
      sendSuccessResponse(res, null, "Usuario no encontrado", 404);
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
