import { Router } from "express";
import CategoriaController from "../Controllers/Categoria.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/", CategoriaController.getAllCategorias)
  .get("/:categoriaId", CategoriaController.getOneCategoria)
  .post("/", CategoriaController.createNewCategoria)
  .put("/:categoriaId", CategoriaController.updateOneCategoria)
  .delete("/:categoriaId", CategoriaController.deleteOneCategoria);
