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

// Por supuesto, corrigiendo la relación anterior de los documentos en MongoDB para las colecciones de "usuarios", "transacciones", "categorias" y "presupuestos":

// Documento de ejemplo para la colección "usuarios":
// json
// Copy code
// {
//   "_id": ObjectId("60f15edc58b1680017b27b0a"),
//   "nombre": "Juan Pérez",
//   "correo": "juan@example.com",
//   "contraseña": "hashed_password_here",
//   "fecha_registro": ISODate("2023-07-13T00:00:00Z"),
//   "estado_cuenta": "activo"
// }
// Documento de ejemplo para la colección "transacciones":
// json
// Copy code
// {
//   "_id": ObjectId("60f15ee458b1680017b27b0b"),
//   "fecha": ISODate("2023-07-13T12:30:00Z"),
//   "tipo": "ingreso",
//   "categoria": ObjectId("60f15ee458b1680017b27b0c"),
//   "monto": 2500,
//   "usuario": ObjectId("60f15edc58b1680017b27b0a")
// }
// Documento de ejemplo para la colección "categorias":
// json
// Copy code
// {
//   "_id": ObjectId("60f15ee458b1680017b27b0c"),
//   "nombre": "salario",
//   "descripcion": "Ingresos por sueldo mensual"
// }
// Documento de ejemplo para la colección "presupuestos":
// json
// Copy code
// {
//   "_id": ObjectId("60f15ee458b1680017b27b0d"),
//   "categoria": ObjectId("60f15ee458b1680017b27b0c"),
//   "monto": 1000,
//   "usuario": ObjectId("60f15edc58b1680017b27b0a")
// }
// En esta corrección, los campos "categoria" y "usuario" en los documentos de "transacciones" y "presupuestos" ahora contienen solo el ObjectId (ID) correspondiente a la "categoria" y "usuario" respectivamente. Esta es la forma más común de establecer relaciones entre documentos en MongoDB, utilizando el ObjectId para hacer referencia a otros documentos en diferentes colecciones.
