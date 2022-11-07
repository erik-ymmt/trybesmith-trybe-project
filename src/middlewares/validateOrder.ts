import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

type Order = {
  productsIds: number[];
  user: 'string';
};

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const products = req.body;

  const schema = Joi.object<Order>({
    productsIds: Joi.array().items(Joi.number().required()).required().messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    }),
    user: Joi.string(),
  });

  const { error } = schema.validate(products);
  if (error) {
    const { message } = error.details[0];
    const status = message.includes('required') ? 400 : 422;
    return res.status(status).json({ message });
  }

  return next();
};

export default validateOrder;
