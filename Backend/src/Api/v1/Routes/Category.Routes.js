import { Router } from "express";
import { validateSchema } from "../Middlewares/Validator.js";
import {
  registerCategorySchema,
  updateCategorySchema,
} from "../Schemas/Category.Schema.js";
import CategoriaController from "../Controllers/Category.Controller.js";

const ROUTER = Router();

export default ROUTER.get("/", CategoriaController.getAllCategorias)
  .get("/:categoriaId", CategoriaController.getOneCategoria)
  .post(
    "/",
    validateSchema(registerCategorySchema),
    CategoriaController.createNewCategoria
  )
  .put(
    "/:categoriaId",
    validateSchema(updateCategorySchema),
    CategoriaController.updateOneCategoria
  )
  .delete("/:categoriaId", CategoriaController.deleteOneCategoria);
