import { Router } from "express";

import routerCategorias from "./categoria.routes.js";
import routerPresupuestos from "./presupuesto.routes.js";
import routerTransacciones from "./transaccion.routes.js";
import routerUsuarios from "./usuario.routes.js";

const ROUTER = Router();

const path = "/api/v1/";

export default ROUTER.use(`${path}categorias`, routerCategorias)
  .use(`${path}presupuestos`, routerPresupuestos)
  .use(`${path}transacciones`, routerTransacciones)
  .use(`${path}usuarios`, routerUsuarios);
