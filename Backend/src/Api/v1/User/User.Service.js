import Usuarios from "./User.Schema.js";

const getAllUsuarios = async () => {
  return await Usuarios.find();
};

const getOneUsuario = async (usuarioID) => {
  return await Usuarios.findById(usuarioID);
};

const createNewUsuario = async (newUsuarioData) => {
  return await Usuarios.create(newUsuarioData);
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
