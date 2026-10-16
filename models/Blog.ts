import mongoose, { Schema, Model } from 'mongoose';
import { IBlog } from '@/types';

const BlogSchema: Schema<IBlog> = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String }
}, { timestamps: true });

export default (mongoose.models.Blog as Model<IBlog>) || mongoose.model<IBlog>('Blog', BlogSchema);