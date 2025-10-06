import { z } from 'zod';

export const createOrderSchema = z.object({
  user: z.string().min(1),
  items: z.array(z.object({
    product: z.string().min(1),
    quantity: z.number().int().min(1),
    priceAtPurchase: z.number().min(0)
  })).min(1),
  total: z.number().min(0)
});
