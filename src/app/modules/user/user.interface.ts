import { Model } from 'mongoose'

export type IUser = {
  id: string
  password: string
  role: string
  name: {
    firstName: string
    lastName: string
  }
  phoneNumber: string
  address: string
  budget: number
  income: number
  createdAt: string
  updatedAt: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
