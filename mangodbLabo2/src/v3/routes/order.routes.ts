import { Router, Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { createOrder, listOrders, getOrder, updateOrder, deleteOrder } from '../controllers/order.controller';

const r = Router();

function validateObjectId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ObjectId format' });
  }
  next();
}

r.post('/', createOrder);
r.get('/', listOrders);
r.get('/:id', validateObjectId, getOrder);
r.put('/:id', validateObjectId, updateOrder);
r.delete('/:id', validateObjectId, deleteOrder);

export default r;
