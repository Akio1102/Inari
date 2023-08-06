import { Router } from "express";
import { validateSchema } from "../Middlewares/Validator.js";
import {
  registerBudgetSchema,
  updateBudgetSchema,
} from "../Schemas/Budget.Schema.js";
import PresupuestoController from "../Controllers/Budget.Controller.js";

const ROUTER = Router();

export default ROUTER.get("/", PresupuestoController.getAllPresupuestos)
  .get("/:presupuestoId", PresupuestoController.getOnePresupuesto)
  .post(
    "/",
    validateSchema(registerBudgetSchema),
    PresupuestoController.createNewPresupuesto
  )
  .put(
    "/:presupuestoId",
    validateSchema(updateBudgetSchema),
    PresupuestoController.updateOnePresupuesto
  )
  .delete("/:presupuestoId", PresupuestoController.deleteOnePresupuesto);
