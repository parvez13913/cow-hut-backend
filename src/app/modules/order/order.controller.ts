import { Request, Response } from 'express';
import catchAsync from '../shared/catchAsync';
import sendResponse from '../shared/sendResponse';
import { IOrder } from './order.interface';
import httpStatus from 'http-status';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { cow, buyer } = req.body;

  const result = await OrderService.createOrder(cow, buyer);

  sendResponse<IOrder>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order Created Successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
};
