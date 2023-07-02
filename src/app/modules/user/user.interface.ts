import { Model, Types } from 'mongoose'
import { IBuyer } from '../buyer/buyer.interface'
import { ISeller } from '../seller/seller.interface'

export type IUser = {
  id: string
  role: string
  password: string
  buyer?: Types.ObjectId | IBuyer
  seller?: Types.ObjectId | ISeller
}

export type UserModel = Model<IUser, Record<string, unknown>>
