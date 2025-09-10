import express from 'express';
import userRoutes from './routes/user.route';
import productRoutes from './routes/product.route';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', productRoutes);

app.use(errorMiddleware);

export default app;