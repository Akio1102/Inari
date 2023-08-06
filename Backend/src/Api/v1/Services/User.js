import Usuarios from "../Models/User.Model.js";
import { encryptPassword, comparePasswords } from "../Helpers/Hash.js";
import { createToken } from "../Helpers/Token.js";

const getAllUsuarios = async () => {
  try {
    const allUser = await Usuarios.find();
    if (allUser.length > 0) {
      return { msg: "Usuarios encontrados", data: allUser };
    }
    return { msg: "No hay Usuarios", status: 404 };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const getOneUsuario = async (usuarioID) => {
  try {
    const OneUser = await Usuarios.findById(usuarioID);

    if (!OneUser) {
      return { msg: "No Existe ese Usuario", status: 404 };
    }
    return { msg: "Usuario encontrado", data: OneUser };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

export const createNewUsuario = async (userData) => {
  try {
    const { password, email } = userData;
    const existingUser = await Usuarios.findOne({ email });

    if (existingUser) {
      return {
        msg: `El Usuario ya existe`,
        status: 409,
      };
    }

    const hashedPassword = encryptPassword(password);
    userData.password = hashedPassword;

    const newUsuario = await Usuarios.create(userData);

    return {
      status: 201,
      msg: "Usuario creado Exitosamente",
      data: newUsuario,
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const updateOneUsuario = async (userID, userData) => {
  try {
    const { password } = userData;
    const existingUser = await Usuarios.findById(userID);

    if (!existingUser) {
      return {
        msg: `El Usuario no existe`,
        status: 404,
      };
    }

    if (!password) {
      return {
        msg: `Ingresa una Password Valida`,
        status: 409,
      };
    }

    const hashedPassword = encryptPassword(password);
    userData.password = hashedPassword;

    const updateUser = await Usuarios.findByIdAndUpdate(userID, userData, {
      new: true,
    });

    return {
      status: 200,
      msg: "Usuario Actualizado Exitosamente",
      data: updateUser,
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const deleteOneUsuario = async (userID) => {
  try {
    const deleteUser = await Usuarios.findByIdAndDelete(userID);

    if (!deleteUser) {
      return {
        msg: `El Usuario no existe`,
        status: 404,
      };
    }

    return {
      status: 200,
      msg: "Usuario Eliminado Exitosamente",
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const Login = async (user) => {
  const { email, password } = user;
  try {
    const userFound = await Usuarios.findOne({ email });

    if (!userFound) {
      throw new Error("Usuario no encontrado");
    }

    const isPasswordValid = comparePasswords(password, userFound.password);

    if (!isPasswordValid) {
      throw new Error("Password incorrecta");
    }

    const token = await createToken(userFound._id);

    return token;
  } catch (error) {
    throw new Error(`Error al iniciar sesión: ${error.message}`);
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
