import { Router } from "express";
import UsuarioController from "../Controllers/Usuario.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/", UsuarioController.getAllUsuarios)
  .get("/:usuarioId", UsuarioController.getOneUsuario)
  .post("/", UsuarioController.createNewUsuario)
  .put("/:usuarioId", UsuarioController.updateOneUsuario)
  .delete("/:usuarioId", UsuarioController.deleteOneUsuario);
