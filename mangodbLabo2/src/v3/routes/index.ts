import { Router } from 'express';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import orderRoutes from './order.routes';
import aggregationRoutes from './aggregation.routes';

const r = Router();

r.use('/', aggregationRoutes);
r.use('/users', userRoutes);
r.use('/products', productRoutes);
r.use('/orders', orderRoutes);

export default r;
