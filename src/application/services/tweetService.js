import mongoose from '../../infrastructure/db/db.js';
import TweetModel from '../../infrastructure/respositories/tweetRepository.js';
import { Types } from 'mongoose';

class TweetService {
  async createTweet(userId, { text }) {
    const tweet = new TweetModel({ userId, text });
    await tweet.save();
    return tweet;
  }

  async getUserTimeline(userId, cursor = null, limit = 10) {
    const query = { userId: new mongoose.Types.ObjectId(userId) };
    if (cursor) {
      query._id = { $lt: new mongoose.Types.ObjectId(cursor) };
    }
    return await TweetModel.find(query).sort({ createdAt: -1 }).limit(limit);
  }
}

export default new TweetService();
