import { z } from 'zod';
import { UserRole } from './user.constants';

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.enum([...UserRole] as [string, ...string[]]),
    name: z.object({
      firstName: z.string({
        required_error: 'First Name is required',
      }),
      lastName: z.string({
        required_error: 'Last Name is required',
      }),
    }),
    phoneNumber: z.string({
      required_error: 'Phone Number is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    budget: z.number({
      required_error: 'Budget is Required',
    }),
    income: z.number({
      required_error: 'income is required',
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
