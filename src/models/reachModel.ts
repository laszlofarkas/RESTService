import { Schema, model } from 'mongoose';

const ReachSchema = new Schema({
  post_impressions: [{
    value: String,
    timestamp: Date
  }],
  post_impressions_organic: [{
    value: String,
    timestamp: Date
  }],
  post_impressions_viral: [{
    value: String,
    timestamp: Date
  }],
  post_impressions_paid: [{
    value: String,
    timestamp: Date
  }]
});

export const Reach = model('reach', ReachSchema)
