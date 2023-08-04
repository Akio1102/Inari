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
    sendErrorResponse(res, error);
  }
};

const getOneUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const oneUsuario = await usuariosService.getOneUsuario(usuarioId);
    handleUsuariosResponse(res, oneUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewUsuario = async (req, res) => {
  try {
    const createdUsuario = await usuariosService.createNewUsuario(req.body);
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
    handleUsuariosResponse(res, updatedUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const deletedUsuario = await usuariosService.deleteOneUsuario(usuarioId);
    handleUsuariosResponse(res, deletedUsuario);
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