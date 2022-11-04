import { Request, Response } from 'express';
import { User } from '../interfaces/user.interface';
import { userService } from '../services';

const registerUser = async (req: Request, res: Response) => {
  const user:User = req.body;

  await userService.registerUser(user);
  res.status(201).json(user); // token
};

const getUsers = () => {};

export { registerUser, getUsers };
