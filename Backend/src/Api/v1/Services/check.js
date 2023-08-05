// import Usuarios from "../User.Schema.js";
// import { comparePasswords } from "../Helpers/Hash.js";
// import { createToken } from "../Helpers/Token.js";

// export const checkLogin = async (UsuarioData) => {
//   const { email, password } = UsuarioData;
//   try {
//     const userFound = await Usuarios.findOne({ email });

//     if (!userFound) {
//       throw new Error("Usuario no encontrado");
//     }

//     const isPasswordValid = comparePasswords(password, userFound.password);

//     if (!isPasswordValid) {
//       throw new Error("Password incorrecta");
//     }

//     const token = await createToken(userFound._id);

//     return token;
//   } catch (error) {
//     throw new Error("Error al intentar iniciar sesión");
//   }
// };
