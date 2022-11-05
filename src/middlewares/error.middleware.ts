import { NextFunction, Request, Response } from 'express';
import IError from '../interfaces/error.interface';

const errorMiddleware = (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as IError;
  res.status(status || 500).json({ message });
};

export default errorMiddleware;
