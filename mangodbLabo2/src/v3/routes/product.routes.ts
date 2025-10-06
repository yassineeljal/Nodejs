import { Router } from 'express';
import { createProduct, listProducts, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller';
const r = Router();
r.post('/', createProduct);
r.get('/', listProducts);
r.get('/:id', getProduct);
r.put('/:id', updateProduct);
r.delete('/:id', deleteProduct);
export default r;
