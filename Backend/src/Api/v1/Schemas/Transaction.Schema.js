import { z } from "zod";

export const registerSchema = z.object({
  categoria: z.string({ required_error: "La categoria es requerido" }),
  tipo: z.enum(["ingreso", "egreso"]),
  monto: z
    .number({ required_error: "Se requiere Monto" })
    .min(0, "Monto debe ser mayor o igual a cero"),
  fecha: z.string().datetime({ required_error: "Se requiere Fecha" }),
});

export const updateSchema = z.object({
  categoria: z.string({ required_error: "La categoria es requerido" }),
  tipo: z.enum(["ingreso", "egreso"]),
  monto: z
    .number({ required_error: "Se requiere Monto" })
    .min(0, "Monto debe ser mayor o igual a cero"),
  fecha: z.string().datetime({ required_error: "Se requiere Fecha" }),
});
