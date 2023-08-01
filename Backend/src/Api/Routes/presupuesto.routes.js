import { Router } from "express";
import PresupuestoController from "../Controllers/Presupuesto.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/", PresupuestoController.getAllPresupuestos)
  .get("/:presupuestoId", PresupuestoController.getOnePresupuesto)
  .post("/", PresupuestoController.createNewPresupuesto)
  .put("/:presupuestoId", PresupuestoController.updateOnePresupuesto)
  .delete("/:presupuestoId", PresupuestoController.deleteOnePresupuesto);
