import { Request, Response } from 'express';
import catchAsync from '../shared/catchAsync';
import sendResponse from '../shared/sendResponse';
import { ICow } from './cow.interface';
import httpStatus from 'http-status';
import { CowService } from './cow.service';
import pick from '../shared/pick';
import { cowFilterableFields } from './cow.constants';
import { paginationFields } from '../../../constants/pagination';

const createCow = catchAsync(async (req: Request, res: Response) => {
  const { ...cowData } = req.body;
  const result = await CowService.createCow(cowData);

  sendResponse<ICow>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cow created successfully',
    data: result,
  });
});

const getAllCows = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, cowFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await CowService.getAllCows(filters, paginationOptions);

  sendResponse<ICow[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cows retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const CowController = {
  createCow,
  getAllCows,
};
