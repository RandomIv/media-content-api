import express from 'express';
import errorHandler from './controllers/errorController.js';
import userRouter from './routes/userRoutes.js';
const app = express();

app.use(express.json());
app.use('/api/users', userRouter);
app.use(errorHandler);

export default app;
