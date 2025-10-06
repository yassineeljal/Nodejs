import { Router } from 'express';
import { Order } from '../models/Order';

const r = Router();


r.get('/orders/summary', async (_req, res) => {
  const [summary] = await Order.aggregate([
    { $group: {
        _id: null,
        totalOrders: { $sum: 1 },
        totalRevenue: { $sum: '$total' },
        avgOrderValue: { $avg: '$total' }
    }}
  ]);
  res.json(summary || { totalOrders: 0, totalRevenue: 0, avgOrderValue: 0 });
});


r.get('/products/most-sold', async (_req, res) => {
  const result = await Order.aggregate([
    { $unwind: '$items' },
    { $group: {
        _id: '$items.product',
        totalQty: { $sum: '$items.quantity' }
    }},
    { $sort: { totalQty: -1 } },
    { $limit: 10 }
  ]);
  res.json(result);
});

r.get('/users/top-buyers', async (_req, res) => {
  const result = await Order.aggregate([
    { $group: {
        _id: '$user',
        totalSpent: { $sum: '$total' }
    }},
    { $sort: { totalSpent: -1 } },
    { $limit: 10 }
  ]);
  res.json(result);
});

export default r;
