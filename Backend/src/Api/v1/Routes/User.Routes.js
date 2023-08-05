import { Router } from "express";
import { authRequired } from "../Middlewares/ValidateToken.js";
import UsuarioController from "../Controllers/User.Controller.js";

const ROUTER = Router();

export default ROUTER.get(
  "/usuarios",
  authRequired,
  UsuarioController.getAllUsuarios
)
  .get("/usuario", authRequired, UsuarioController.getOneUsuario)
  .post("/usuario/Login", UsuarioController.Login)
  .post("/usuario/Logout", UsuarioController.Logout)
  .post("/usuario/updateFile", authRequired, UsuarioController.uploadFile)
  .post("/usuario", UsuarioController.createNewUsuario)
  .put("/usuario/update", authRequired, UsuarioController.updateOneUsuario)
  .delete("/usuario/delete", authRequired, UsuarioController.deleteOneUsuario);
