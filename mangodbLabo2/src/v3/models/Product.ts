import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  stock: number;
  createdAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true, index: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 }
}, { timestamps: true });

export const Product = model<IProduct>('Product', ProductSchema);
