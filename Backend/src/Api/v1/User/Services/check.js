import Usuarios from "../User.Schema.js";
import { comparePasswords } from "../../Helpers/Hash.js";

export const checkLogin = async (UsuarioData) => {
  const { correo, password } = UsuarioData;
  try {
    const user = await Usuarios.findOne({ correo });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const isPasswordValid = comparePasswords(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    }

    return user;
  } catch (error) {
    throw new Error("Error al intentar iniciar sesión");
  }
};
