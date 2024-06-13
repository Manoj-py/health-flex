import tweetService from '../../application/services/tweetService.js';

const postTweet = async (req, res) => {
  try {
    const tweet = await tweetService.createTweet(req.user, req.body);
    res.status(201).json(tweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTimeline = async (req, res) => {
  const { userId } = req.params;
  const { cursor, limit } = req.query;
  try {
    const timeline = await tweetService.getUserTimeline(userId, cursor, parseInt(limit));
    res.status(200).json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  postTweet,
  getTimeline,
};
