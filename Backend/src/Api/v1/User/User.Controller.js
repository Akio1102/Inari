import usuariosService from "./Services/User.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
  handleUsuariosResponse,
} from "../Helpers/sendResponse.js";

const getAllUsuarios = async (req, res) => {
  try {
    const allUsuarios = await usuariosService.getAllUsuarios();
    handleUsuariosResponse(res, allUsuarios);
  } catch (error) {
    sendErrorResponse(res, `Error al Obtener usuario: ${error.message}`);
  }
};

const getOneUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const oneUsuario = await usuariosService.getOneUsuario(usuarioId);
    handleUsuariosResponse(res, oneUsuario);
  } catch (error) {
    sendErrorResponse(res, `Error al Obtener usuario: ${error.message}`);
  }
};

const createNewUsuario = async (req, res) => {
  try {
    const { body } = req.body;

    if (!body.username || !body.password) {
      return sendErrorResponse(res, "Datos Incompletos", 400);
    }

    const createdUsuario = await usuariosService.createNewUsuario(body);
    handleUsuariosResponse(res, createdUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const updatedUsuario = await usuariosService.updateOneUsuario(
      usuarioId,
      req.body
    );
    const hashedPassword = encryptPassword(password);
    newUsuarioData.password = hashedPassword;
    handleUsuariosResponse(res, updatedUsuario);
  } catch (error) {
    sendErrorResponse(res, `Error al Actualizar usuario: ${error.message}`);
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

const Login = async (req, res) => {
  try {
    const userData = req.body;
    const login = await usuariosService.Login(userData);

    sendSuccessResponse(res, login, "Inicio de sesión exitoso");
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, `Error al iniciar sesión: ${error.message}`);
  }
};

export default {
  getAllUsuarios,
  getOneUsuario,
  createNewUsuario,
  updateOneUsuario,
  deleteOneUsuario,
  Login,
};
