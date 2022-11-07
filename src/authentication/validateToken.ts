import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { getUsers } from '../helpers/getExistentUsers';

const secret = process.env.JWT_SECRET as string;

type Decode = {
  username: string;
  iat: number;
  exp: number;
};

const tokenAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret) as Decode;
    const users = await getUsers();
    
    req.body.user = decoded.username;

    if (!users.includes(decoded.username)) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};

export default tokenAuth;