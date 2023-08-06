import { Schema, model } from "mongoose";

const PresupuestoSchema = new Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: [true, "Se requiere usuario"],
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
