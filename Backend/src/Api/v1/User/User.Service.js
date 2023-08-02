import Usuarios from "./User.Schema.js";
import { encryptPassword } from "../Helpers/Hash.js";

const getAllUsuarios = async () => {
  return await Usuarios.find();
};

const getOneUsuario = async (usuarioID) => {
  return await Usuarios.findById(usuarioID);
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
  createNewUsuario,
  updateOneUsuario,
  deleteOneUsuario,
};
