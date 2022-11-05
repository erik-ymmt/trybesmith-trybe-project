import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { Login } from '../interfaces/user.interface';

const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const userLogin = req.body;

  const schema = Joi.object<Login>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(userLogin);
  if (error) {
    const { message } = error.details[0];
    res.status(400).json({ message });
  }

  next();
};

export default validateLogin;
