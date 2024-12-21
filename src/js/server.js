import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
mongoose.connect(process.env.DATABASE_URL).then(console.log('Connected to DB'));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
