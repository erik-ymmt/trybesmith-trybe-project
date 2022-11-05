import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

import { User } from '../interfaces/user.interface';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const userLogin = req.body;

  const schema = Joi.object<User>({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(userLogin);
  if (error) {
    const { message } = error.details[0];
    const status = message.includes('required') ? 400 : 422;
    return res.status(status).json({ message });
  }

  return next();
};

export default validateUser;
