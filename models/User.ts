import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '@/types';

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  otpExpires: { type: Date }
}, { timestamps: true });

export default (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>('User', UserSchema);