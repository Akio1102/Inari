import { Router } from "express";
import { authRequired } from "../Middlewares/ValidateToken.js";
import { validateSchema } from "../Middlewares/Validator.js";
import { registerUserSchema, loginUserSchema } from "../Schemas/Auth.Schema.js";
import { updateUserSchema } from "../Schemas/User.Schema.js";
import UsuarioController from "../Controllers/User.Controller.js";

const ROUTER = Router();

export default ROUTER.get("/verify", UsuarioController.verifytoken)
  .get("/usuarios", authRequired, UsuarioController.getAllUsuarios)
  .get("/usuario", authRequired, UsuarioController.getOneUsuario)
  .post(
    "/usuario/Login",
    validateSchema(loginUserSchema),
    UsuarioController.Login
  )
  .get("/usuario/Logout", UsuarioController.Logout)
  .post("/usuario/updateFile", authRequired, UsuarioController.uploadFile)
  .post(
    "/usuario",
    validateSchema(registerUserSchema),
    UsuarioController.createNewUsuario
  )
  .put(
    "/usuario/update",
    authRequired,
    validateSchema(updateUserSchema),
    UsuarioController.updateOneUsuario
  )
  .delete("/usuario/delete", authRequired, UsuarioController.deleteOneUsuario);
