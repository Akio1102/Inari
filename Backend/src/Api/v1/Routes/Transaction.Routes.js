import { Router } from "express";
import TransaccionController from "../Controllers/Transaction.Controller.js";

const ROUTER = Router();

export default ROUTER.get("/", TransaccionController.getAllTransacciones)
  .get("/:transaccionId", TransaccionController.getOneTransaccion)
  .post("/", TransaccionController.createNewTransaccion)
  .put("/:transaccionId", TransaccionController.updateOneTransaccion)
  .delete("/:transaccionId", TransaccionController.deleteOneTransaccion);
