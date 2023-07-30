import express from "express";
import morgan from "morgan";
import cors from "cors";

export default function (app) {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
}