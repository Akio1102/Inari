import { Schema, model } from "mongoose";

const PresupuestoSchema = Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "usuario",
      required: [true, "Se requiere Usuario"],
    },
    categoria: {
      type: Schema.Types.ObjectId,
      ref: "categoria",
      required: [true, "Se requiere Categoria"],
    },
    monto: {
      type: Number,
      required: [true, `Se requiere Monto`],
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model("presupuesto", PresupuestoSchema);
