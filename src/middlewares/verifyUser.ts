import { NextFunction, Request, Response } from 'express';
import * as database from '../authentication/getExistentUsers';

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const users = await database.getUsers();
  const passwords = await database.getPasswords(username);

  if (!users.includes(username) || !passwords.includes(password)) {
    res.status(401).json({ message: 'Username or password invalid' });
  }

  next();
};

export default verifyUser;
