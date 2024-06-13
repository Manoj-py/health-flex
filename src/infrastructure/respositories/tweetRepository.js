import mongoose from '../db/db.js';

const tweetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

tweetSchema.index({ createdAt: -1 });

const TweetModel = mongoose.model('Tweet', tweetSchema);

export default TweetModel;
