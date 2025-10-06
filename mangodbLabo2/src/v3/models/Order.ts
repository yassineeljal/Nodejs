import { Schema, model, Document, Types } from 'mongoose';

export interface IOrderItem {
  product: Types.ObjectId;
  quantity: number;
  priceAtPurchase: number;
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  items: IOrderItem[];
  total: number;
  createdAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  priceAtPurchase: { type: Number, required: true, min: 0 }
}, { _id: false });

const OrderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  items: { type: [OrderItemSchema], required: true, validate: (v:IOrderItem[]) => v.length > 0 },
  total: { type: Number, required: true, min: 0 }
}, { timestamps: true });

export const Order = model<IOrder>('Order', OrderSchema);
