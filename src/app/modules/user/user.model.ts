import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'
import { UserRole } from './user.constants'

const userSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: UserRole,
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'Buyer',
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const User = model<IUser, UserModel>('User', userSchema)
