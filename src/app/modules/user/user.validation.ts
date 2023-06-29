import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.string({
      required_error: 'Role is required',
    }),
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
      required_error: 'Number is Required',
    }),
    income: z.number({
      required_error: 'Number is required',
    }),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
