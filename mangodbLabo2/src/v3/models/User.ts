import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name?: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  name: { type: String }
}, { timestamps: true });

export const User = model<IUser>('User', UserSchema);
