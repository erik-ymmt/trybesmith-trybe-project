import { NextFunction, Request, Response } from 'express';
import * as database from '../helpers/getExistentUsers';

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const users = await database.getUsers();
  
  if (!users.includes(username)) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  
  const passwords = await database.getPasswords(username);
  if (!passwords.includes(password)) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return next();
};

export default verifyUser;
