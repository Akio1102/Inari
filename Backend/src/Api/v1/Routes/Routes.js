import { Router } from "express";

import CATEGORY_ROUTES from "./Category.Routes.js";
import BUDGET_ROUTES from "./Budget.Routes.js";
import TRANSACTION_ROUTES from "./Transaction.Routes.js";
import USER_ROUTES from "./User.Routes.js";
import SEARCH from "../Controllers/search.controller.js";

import { authRequired } from "../Middlewares/ValidateToken.js";

const ROUTER = Router();

const PATH = "/api/v1/";

export default ROUTER.use(`${PATH}categorias`, authRequired, CATEGORY_ROUTES)
  .use(`${PATH}presupuestos`, authRequired, BUDGET_ROUTES)
  .use(`${PATH}transacciones`, authRequired, TRANSACTION_ROUTES)
  .use(`${PATH}`, USER_ROUTES)
  .use(`${PATH}search`, authRequired, SEARCH);
