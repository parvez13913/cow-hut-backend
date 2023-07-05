import { Schema, model } from 'mongoose';
import { CowModel, ICow } from './cow.interface';
import { Breed, Category, Label, Location } from './cow.constants';

const cowSchema = new Schema<ICow, CowModel>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      enum: Location,
      required: true,
    },
    breed: {
      type: String,
      enum: Breed,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      enum: Label,
      required: true,
    },
    category: {
      type: String,
      enum: Category,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Cow = model<ICow, CowModel>('Cow', cowSchema);
