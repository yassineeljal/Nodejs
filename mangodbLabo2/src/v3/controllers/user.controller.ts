import { Request, Response } from 'express';
import { userService } from '../services/user.service';
import { createUserSchema, updateUserSchema } from '../validations/user';

export const createUser = async (req: Request, res: Response) => {
  const parsed = createUserSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const user = await userService.create(parsed.data);
  res.status(201).json(user);
};

export const listUsers = async (_: Request, res: Response) => {
  res.json(await userService.list());
};

export const getUser = async (req: Request, res: Response) => {
  const user = await userService.get(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const parsed = updateUserSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const user = await userService.update(req.params.id, parsed.data);
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const user = await userService.remove(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json({ ok: true });
};
