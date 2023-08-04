import usuariosService from "./Services/User.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
  handleUsuariosResponse,
} from "../Helpers/sendResponse.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    res.cookie("token", login);
    sendSuccessResponse(res, "Inicio de sesión exitoso");
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const Logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

const uploadFile = (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const { file } = req.files;
  const uploadPath = path.join(__dirname, "../uploads/", file.name);

  // Use the mv() method to place the file somewhere on your server
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ msg: "File uploaded!" + uploadPath });
  });
};

export default {
  getAllUsuarios,
  getOneUsuario,
  createNewUsuario,
  updateOneUsuario,
  deleteOneUsuario,
  Login,
  Logout,
  uploadFile,
};
