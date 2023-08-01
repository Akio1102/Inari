import { Schema, model } from "mongoose";

const TransaccionSchema = Schema(
  {
    categoria_id: {
      type: String,
      required: [true, `Categoria_ID is required`],
    },
    usuario_id: {
      type: String,
      required: [true, `Usuario_id is required`],
    },
    nombre_categoria: {
      type: String,
      required: [true, `Nombre_categoria is required`],
    },
    tipo: {
      type: String,
      required: [true, `Tipo is required`],
    },
    monto: {
      type: Number,
      required: [true, `Monto is required`],
    },
  },
  {
    timestamps: true,
  }
);

export default model("transaccione", TransaccionSchema);
