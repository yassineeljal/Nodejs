import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  name: z.string().min(1).optional()
});

export const updateUserSchema = z.object({
  email: z.email().optional(),
  password: z.string().min(6).optional(),
  name: z.string().min(1).optional()
});
