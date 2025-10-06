import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive(), 
  stock: z.number().int().min(0)
});

export const updateProductSchema = z.object({
  name: z.string().min(1).optional(),
  price: z.number().positive().optional(),
  stock: z.number().int().min(0).optional()
});
