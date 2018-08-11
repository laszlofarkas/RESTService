import { Schema } from 'mongoose';

export const PublishingSchema = new Schema({
  id: {
    type: String
  },
  content: {
    type: Object
  },
  tags: {
    type: Array
  },
  status: {
    type: String
  },
  channels: {
    type: Array
  },
  scheduled: {
    type: Date
  },
  geo: {
    type: Object
  }
})
