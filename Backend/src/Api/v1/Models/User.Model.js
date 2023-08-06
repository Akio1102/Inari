import { Schema, model } from "mongoose";

const usuarioSchema = new Schema(
  {
    icon: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "Nombre de usuario obligatorio"],
      trim: true,
      minlength: [3, "El nombre de usuario debe tener al menos 3 caracteres"],
      maxlength: [
        50,
        "El nombre de usuario no puede superar los 50 caracteres",
      ],
    },
    email: {
      type: String,
      required: [true, "Email es obligatorio"],
      unique: true,
      trim: true,
      validate: {
        validator: (email) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        },
        message: "Formato de correo Email no válido",
      },
    },
    password: {
      type: String,
      required: [true, "Se requiere Password"],
      minlength: [6, "La Password debe tener al menos 6 caracteres"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Usuario", usuarioSchema);
