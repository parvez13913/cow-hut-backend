import { Request, Response } from 'express'
import catchAsync from '../shared/catchAsync'
import sendResponse from '../shared/sendResponse'
import { IUser } from './user.interface'
import { UserService } from './user.service'
import httpStatus from 'http-status'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body
  const request = await UserService.createUser(userData)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully!!',
    data: request,
  })
})

export const UserController = {
  createUser,
}
