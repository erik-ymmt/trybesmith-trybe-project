import { Request, Response } from 'express';
import { orderService } from '../services';

const getOrders = async (req: Request, res: Response) => {
  const result = await orderService.getOrders();
  res.status(200).json(result);
};

const registerOrder = async () => {};

export { getOrders, registerOrder };
