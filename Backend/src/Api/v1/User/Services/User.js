import Usuarios from "../User.Schema.js";
import { encryptPassword } from "../../Helpers/Hash.js";
import { createToken } from "../../Helpers/Token.js";
import { checkLogin } from "./check.js";

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
    throw new Error("Error al crear el nuevo usuario");
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
    throw new Error("Hubo un problema al actualizar el usuario");
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
    throw new Error("Hubo un problema al actualizar el usuario");
  }
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

export default {
  getAllUsuarios,
  getOneUsuario,
  Login,
  createNewUsuario,
  updateOneUsuario,
  deleteOneUsuario,
};
