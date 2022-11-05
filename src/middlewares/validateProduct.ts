import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

import { Product } from '../interfaces/product.interface';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const userLogin = req.body;

  const schema = Joi.object<Product>({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(userLogin);
  if (error) {
    const { message } = error.details[0];
    const status = message.includes('required') ? 400 : 422;
    return res.status(status).json({ message });
  }

  return next();
};

export default validateProduct;
