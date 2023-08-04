import { Router } from "express";

import CATEGORY_ROUTES from "./Category/Category.Routes.js";
import BUDGET_ROUTES from "./Budget/Budget.Routes.js";
import TRANSACTION_ROUTES from "./Transaction/Transaction.Routes.js";
import USER_ROUTES from "./User/User.Routes.js";
import SEARCH from "./Search/search.controller.js";

const ROUTER = Router();

const PATH = "/api/v1/";

export default ROUTER.use(`${PATH}categorias`, CATEGORY_ROUTES)
  .use(`${PATH}presupuestos`, BUDGET_ROUTES)
  .use(`${PATH}transacciones`, TRANSACTION_ROUTES)
  .use(`${PATH}usuarios`, USER_ROUTES)
  .use(`${PATH}search`, SEARCH);
