import { Router } from "express";
import { validateSchema } from "../Middlewares/Validator.js";
import { registerSchema, updateSchema } from "../Schemas/Transaction.Schema.js";
import TransaccionController from "../Controllers/Transaction.Controller.js";

const ROUTER = Router();

export default ROUTER.get("/", TransaccionController.getAllTransacciones)
  .get("/:transaccionId", TransaccionController.getOneTransaccion)
  .post(
    "/",
    validateSchema(registerSchema),
    TransaccionController.createNewTransaccion
  )
  .put(
    "/:transaccionId",
    validateSchema(updateSchema),
    TransaccionController.updateOneTransaccion
  )
  .delete("/:transaccionId", TransaccionController.deleteOneTransaccion);
