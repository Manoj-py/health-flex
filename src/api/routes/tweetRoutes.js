import express from 'express';
import tweetController from '../../api/controllers/tweetController.js';
import authMiddleware from '../../shared/middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, tweetController.postTweet);
router.get('/:userId/timeline', tweetController.getTimeline);

export default router;
