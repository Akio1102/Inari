import { z } from "zod";

export const registerCategorySchema = z.object({
  nombre: z.string({
    required_error: "El nombre de la categoria es requerido",
  }),
  descripcion: z.string({ required_error: "La descripcion es requerida" }),
});

export const updateCategorySchema = z.object({
  nombre: z.string({
    required_error: "El nombre de la categoria es requerido",
  }),
  descripcion: z.string({ required_error: "La descripcion es requerida" }),
});
