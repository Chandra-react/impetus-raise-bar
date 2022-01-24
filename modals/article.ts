import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  author: { type: String },
  title: { type: String },
  description: { type: String },
  url: { type: String },
  image: { type: String },
  category: String,
  language: { type: String, enum: ['en', 'ar', 'de', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'zh'] },
  country: String,
  published_at: { type: Date, default: new Date() },
  source: String,
});
// mongoose.model = {};

export const Article = mongoose?.models?.Article || mongoose.model('Article', articleSchema);
