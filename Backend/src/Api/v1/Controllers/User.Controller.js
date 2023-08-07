import usuariosService from "../Services/User.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
  handleResponse,
} from "../Helpers/sendResponse.js";
import { fileURLToPath } from "url";
import path from "path";
import { verify } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getAllUsuarios = async (req, res) => {
  try {
    const allUsuarios = await usuariosService.getAllUsuarios();
    handleResponse(res, allUsuarios);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneUsuario = async (req, res) => {
  try {
    const { id } = req.user;
    const oneUsuario = await usuariosService.getOneUsuario(id);
    handleResponse(res, oneUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewUsuario = async (req, res) => {
  try {
    const createdUsuario = await usuariosService.createNewUsuario(req.body);
    handleResponse(res, createdUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneUsuario = async (req, res) => {
  try {
    const { id } = req.user;
    const updatedUsuario = await usuariosService.updateOneUsuario(id, req.body);
    handleResponse(res, updatedUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneUsuario = async (req, res) => {
  try {
    const { id } = req.user;
    const deletedUsuario = await usuariosService.deleteOneUsuario(id);
    res.cookie("token", "", {
      expires: new Date(0),
    });
    handleResponse(res, deletedUsuario);
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
  return res.status(200).json({ msg: "Token Eliminado" });
};

const verifytoken = async (req, res) => {
  try {
    const { token } = req.cookies;
    const Verifyd = await usuariosService.Verify(token);
    console.log(Verifyd);
    return res.json(Verifyd);
  } catch (error) {
    sendErrorResponse(res, error);
  }
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
  verifytoken,
};
