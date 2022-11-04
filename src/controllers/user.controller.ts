import { Request, Response } from 'express';
import generateToken from '../authentication/generateToken';
import { User } from '../interfaces/user.interface';
import { userService } from '../services';

const registerUser = async (req: Request, res: Response) => {
  const user:User = req.body;

  await userService.registerUser(user);

  const token = generateToken(user);

  res.status(201).json({ token });
};

const getUsers = () => {};

export { registerUser, getUsers };
