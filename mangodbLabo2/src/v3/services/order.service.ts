import { Order } from '../models/Order';

export const orderService = {
  create: (data: any) => Order.create(data),
  list: () => Order.find().populate('user').populate('items.product').lean(),
  get: (id: string) => Order.findById(id).populate('user').populate('items.product').lean(),
  update: (id: string, data: any) => Order.findByIdAndUpdate(id, data, { new: true }).lean(),
  remove: (id: string) => Order.findByIdAndDelete(id).lean()
};
