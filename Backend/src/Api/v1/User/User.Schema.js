import { Schema, model } from "mongoose";

const UsuarioSchema = Schema(
  {
    nombre: {
      type: String,
      required: [true, `Nombre is required`],
    },
    correo: {
      type: String,
      required: [true, `Correo is required`],
      unique: true,
    },
    password: {
      type: String,
      required: [true, `Password is required`],
    },
    estado_cuenta: {
      type: Boolean,
      default: true,
      // required: [true, `Estado_Cuenta is required`],
    },
  },
  {
    timestamps: true,
  }
);

export default model("usuario", UsuarioSchema);
