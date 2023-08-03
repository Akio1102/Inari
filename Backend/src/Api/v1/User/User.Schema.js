import { Schema, model } from "mongoose";

const UsuarioSchema = Schema(
  {
    username: {
      type: String,
      required: [true, `Username is required`],
      trim: true,
    },
    email: {
      type: String,
      required: [true, `Email is required`],
      unique: true,
      trim: true,
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
