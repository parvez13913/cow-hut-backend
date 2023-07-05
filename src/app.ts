import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoute } from './app/modules/user/user.route';
import { CowRouter } from './app/modules/cow/cow.route';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());

// perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth/', UserRoute);
app.use('/api/v1/users/', UserRoute);
app.use('/api/v1/cows/', CowRouter);
// Handle Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// global Error Handler
app.use(globalErrorHandler);

export default app;
