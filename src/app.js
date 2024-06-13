import express from 'express';
import userRoutes from './api/routes/userRoutes.js';
import tweetRoutes from './api/routes/tweetRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: "json" };
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

export default app;
