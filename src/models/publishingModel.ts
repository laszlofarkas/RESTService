import { Schema, model } from 'mongoose';

const PublishingSchema = new Schema({
  id: String,
  content: {
    message: String,
    id: String,
    network: String,
    postType: String,
    media: {
      url: String,
      fileName: String,
      content: String
    },
  },
  tags: [String],
  status: String,
  channels: [{
    id: String,
    name: String
  }],
  scheduled: Date,
  geo: Object
});

export const Publishing = model('publishing', PublishingSchema);
