import express from "express";
import Config from "../Config/index.js";
import Global from "../Middlewares/Global.js";

export default class {
  constructor() {
    this.app = express();
    this.port = Config.PORT;
    this.middlewares = Global(this.app);
  }

  startServer() {
    this.app
      .listen(this.port, () => {
        console.log(`Server running on PORT ${this.port}`);
      })
      .on("error", (err) => {
        console.error("Error al iniciar el servidor:", err.message);
        process.exit(1);
      });
  }
}
