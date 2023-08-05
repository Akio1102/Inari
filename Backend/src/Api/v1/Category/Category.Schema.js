import { Schema, model } from "mongoose";

const CategoriaSchema = Schema(
  {
    nombre: {
      type: String,
      required: [true, `Se requiere Nombre`],
      trim: true,
      maxlength: 100,
    },
    descripcion: {
      type: String,
      required: [true, `Se requiere Descripcion`],
      trim: true,
      maxlength: 250,
    },
  },
  {
    timestamps: true,
  }
);

export default model("categoria", CategoriaSchema);
