import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema(
  {
    icon: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    estado_cuenta: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Usuario", UsuarioSchema);
