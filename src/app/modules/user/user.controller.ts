import { Request, Response } from 'express';
import catchAsync from '../shared/catchAsync';
import sendResponse from '../shared/sendResponse';
// import httpStatus from 'http-status';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const result = await UserService.createUser(userData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: 200,
    message: 'Users created successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
