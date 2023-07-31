import { Schema, model } from "mongoose";

const CategoriaSchema = Schema(
  {
    nombre: {
      type: String,
      required: [true, `Nombres is required`],
    },
    descripcion: {
      type: String,
      required: [true, `Descripcion is required`],
    },
  },
  {
    timestamps: true,
  }
);

export default model("categoria", CategoriaSchema);
