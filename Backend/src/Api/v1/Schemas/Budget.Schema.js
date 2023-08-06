import { z } from "zod";

export const registerBudgetSchema = z.object({
  categoria: z.string({ required_error: "La categoria es requerido" }),
  monto: z
    .number({ required_error: "Se requiere Monto" })
    .min(0, "Monto debe ser mayor o igual a cero"),
});

export const updateBudgetSchema = z.object({
  categoria: z.string({ required_error: "La categoria es requerido" }),
  monto: z
    .number({ required_error: "Se requiere Monto" })
    .min(0, "Monto debe ser mayor o igual a cero"),
});
