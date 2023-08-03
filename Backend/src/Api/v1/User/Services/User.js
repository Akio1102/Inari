import Usuarios from "../User.Schema.js";
import { encryptPassword } from "../../Helpers/Hash.js";
import { createToken } from "../../Helpers/Token.js";
import { checkLogin } from "./check.js";

const getAllUsuarios = async () => {
  return await Usuarios.find();
};

const getOneUsuario = async (usuarioID) => {
  return await Usuarios.findById(usuarioID);
};

const Login = async (user) => {
  try {
    const authenticatedUser = await checkLogin(user);
    const token = await createToken(authenticatedUser);
    return "Token Generado:", token;
  } catch (error) {
    throw new Error(`Error al iniciar sesión: ${error.message}`);
  }
};

export const createNewUsuario = async (newUsuarioData) => {
  const { password } = newUsuarioData;
  try {
    const hashedPassword = encryptPassword(password);
    newUsuarioData.password = hashedPassword;
    return await Usuarios.create(newUsuarioData);
  } catch (error) {
    throw new Error("Error al crear el nuevo usuario");
  }
};

const updateOneUsuario = async (usuarioID, usuarioData) => {
  return await Usuarios.findByIdAndUpdate(usuarioID, usuarioData, {
    new: true,
  });
};

const deleteOneUsuario = async (usuarioID) => {
  return await Usuarios.findByIdAndDelete(usuarioID);
};

export default {
  getAllUsuarios,
  getOneUsuario,
  Login,
  createNewUsuario,
  updateOneUsuario,
  deleteOneUsuario,
};
