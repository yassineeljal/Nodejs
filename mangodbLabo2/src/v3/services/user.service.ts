import { User } from '../models/User';

export const userService = {
  create: (data: any) => User.create(data),
  list: () => User.find().lean(),
  get: (id: string) => User.findById(id).lean(),
  update: (id: string, data: any) => User.findByIdAndUpdate(id, data, { new: true }).lean(),
  remove: (id: string) => User.findByIdAndDelete(id).lean()
};
