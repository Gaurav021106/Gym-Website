import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: 'user' | 'admin';
  isVerified: boolean;
  otp?: string;
  otpExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMember extends Document {
  name: string;
  email: string;
  phone: string;
  membershipPlan: string;
  startDate: Date;
  expiryDate: Date;
  status: 'Active' | 'Expired' | 'Pending';
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  author: string;
  image?: string;
}