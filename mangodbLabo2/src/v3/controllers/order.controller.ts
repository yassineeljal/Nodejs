import { Request, Response } from 'express';
import { orderService } from '../services/order.service';
import { createOrderSchema } from '../validations/order';

export const createOrder = async (req: Request, res: Response) => {
  const parsed = createOrderSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const order = await orderService.create(parsed.data);
  res.status(201).json(order);
};

export const listOrders = async (_: Request, res: Response) => {
  res.json(await orderService.list());
};

export const getOrder = async (req: Request, res: Response) => {
  const order = await orderService.get(req.params.id);
  if (!order) return res.status(404).json({ message: 'Not found' });
  res.json(order);
};

export const updateOrder = async (req: Request, res: Response) => {
  const order = await orderService.update(req.params.id, req.body);
  if (!order) return res.status(404).json({ message: 'Not found' });
  res.json(order);
};

export const deleteOrder = async (req: Request, res: Response) => {
  const order = await orderService.remove(req.params.id);
  if (!order) return res.status(404).json({ message: 'Not found' });
  res.json({ ok: true });
};
