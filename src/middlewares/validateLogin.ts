import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { Login } from '../interfaces/user.interface';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const userLogin = req.body;

  const schema = Joi.object<Login>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(userLogin);
  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }

  return next();
};

export default validateLogin;
