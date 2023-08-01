import { Schema, model } from "mongoose";

const PresupuestoSchema = Schema(
  {
    categoria_id: {
      type: String,
      required: [true, `CategoriaID is required`],
    },
    monto: {
      type: Number,
      required: [true, `Monto is required`],
    },
    usuario_id: {
      type: String,
      required: [true, `UsuarioID is required`],
    },
  },
  {
    timestamps: true,
  }
);

export default model("presupuesto", PresupuestoSchema);
