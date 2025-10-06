import { Product } from '../models/Product';

export const productService = {
  create: (data: any) => Product.create(data),
  list: () => Product.find().lean(),
  get: (id: string) => Product.findById(id).lean(),
  update: (id: string, data: any) => Product.findByIdAndUpdate(id, data, { new: true }).lean(),
  remove: (id: string) => Product.findByIdAndDelete(id).lean()
};
