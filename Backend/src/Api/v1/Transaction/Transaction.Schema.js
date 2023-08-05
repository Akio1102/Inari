import { Schema, model } from "mongoose";

const TransaccionSchema = Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "usuario",
      required: [true, "Se requiere usuario"],
    },
    categoria: {
      type: Schema.Types.ObjectId,
      ref: "categoria",
      required: [true, "Se requiere categoria"],
    },
    tipo: {
      type: String,
      required: [true, "Se requiere Tipo"],
      enum: ["ingreso", "egreso"],
    },
    monto: {
      type: Number,
      required: [true, "Se requiere Monto"],
      min: 0,
    },
    fecha: {
      type: Date,
      required: [true, "Se requiere Fecha"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("transaccione", TransaccionSchema);
