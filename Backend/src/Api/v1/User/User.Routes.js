import { Router } from "express";
import UsuarioController from "./User.Controller.js";

const ROUTER = Router();

export default ROUTER.get("/", UsuarioController.getAllUsuarios)
  .get("/:usuarioId", UsuarioController.getOneUsuario)
  .post("/Login", UsuarioController.Login)
  .post("/", UsuarioController.createNewUsuario)
  .put("/:usuarioId", UsuarioController.updateOneUsuario)
  .delete("/:usuarioId", UsuarioController.deleteOneUsuario);
