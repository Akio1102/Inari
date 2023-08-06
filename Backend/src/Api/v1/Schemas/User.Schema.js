import { z } from "zod";

export const updateUserSchema = z.object({
  icon: z.string({ required_error: "Envie un Formato Valido" }).optional(),
  username: z.string({
    required_error: "El nombre de usuario debe tener al menos 3 caracteres",
  }),
  email: z.string({ required_error: "El email es requerido" }).email({
    message: "Formato de correo Email no válido",
  }),
  password: z
    .string({
      required_error: "Password Invalido",
    })
    .min(6, {
      message: "La Password debe tener al menos 6 caracteres",
    }),
  isActive: z
    .boolean({
      required_error: "Envie un valor valido",
    })
    .optional(),
});
