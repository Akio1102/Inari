import express from "express";
import { Config, Global } from "./Config/config.js";
import ConectDB from "./Database/connection.js";
import Routers from "../Api/v1/Routes.js";

export default class {
  constructor() {
    this.app = express();
    this.port = Config.PORT;
    this.MongoDB();
    this.middlewares = Global(this.app);
    this.routes();
  }

  async MongoDB() {
    await ConectDB(Config.MONGO_URL);
  }

  routes() {
    this.app.use(Routers);
  }

  startServer() {
    this.app
      .listen(this.port, () => {
        console.clear();
        console.log(`Server running on PORT ${this.port}`);
      })
      .on("error", (err) => {
        console.error("Error al iniciar el servidor:", err.message);
        process.exit(1);
      });
  }
}
