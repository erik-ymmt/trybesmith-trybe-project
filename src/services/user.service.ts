import { User } from '../interfaces/user.interface';
import { userModel } from '../models';

const registerUser = async (user: User) => {
  const result = await userModel.registerUser(user);

  return result;
};

const getUsers = () => {};

export { registerUser, getUsers };
