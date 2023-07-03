import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);
  return result;
};

const getAllUser = async (): Promise<IUser[]> => {
  const result = await User.find();

  return result;
};

export const UserService = {
  createUser,
  getAllUser,
};
