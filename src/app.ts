import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoute } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());

// perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users/', UserRoute);

// global Error Handler
app.use(globalErrorHandler);

export default app;
