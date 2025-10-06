import { Request, Response } from 'express';
import { productService } from '../services/product.service';
import { createProductSchema, updateProductSchema } from '../validations/product';

export const createProduct = async (req: Request, res: Response) => {
  const parsed = createProductSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const product = await productService.create(parsed.data);
  res.status(201).json(product);
};

export const listProducts = async (_: Request, res: Response) => {
  res.json(await productService.list());
};

export const getProduct = async (req: Request, res: Response) => {
  const product = await productService.get(req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const parsed = updateProductSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const product = await productService.update(req.params.id, parsed.data);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await productService.remove(req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json({ ok: true });
};
