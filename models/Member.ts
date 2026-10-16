import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMember extends Document {
  name: string;
  phone: string;
  email?: string;
  branch: string;
  plan: string;
  joinDate: string;
  dueDate: string;
  amount: number;
  status: 'Active' | 'Expiring Soon' | 'Overdue';
}

const MemberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    branch: { type: String, required: true },
    plan: { type: String, required: true },
    joinDate: { type: String, required: true },
    dueDate: { type: String, required: true },
    amount: { type: Number, required: true, default: 0 },
    status: {
      type: String,
      enum: ['Active', 'Expiring Soon', 'Overdue'],
      default: 'Active',
    },
  },
  { timestamps: true }
);

export const MemberModel: Model<IMember> =
  mongoose.models.Member || mongoose.model<IMember>('Member', MemberSchema);