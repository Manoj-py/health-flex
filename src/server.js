import app from './app.js';
import mongoose from './infrastructure/db/db.js';
import { config } from 'dotenv';

config()

const PORT = process.env.PORT || 5000;
console.log(PORT)

mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});
