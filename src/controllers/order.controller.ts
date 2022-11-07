import { Request, Response } from 'express';
import getIdByUsername from '../helpers/getIdByUsername';
import { orderService } from '../services';

const getOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getOrders();
  res.status(200).json(result);
};

const registerOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const username = req.body.user;
  
  const userId = await getIdByUsername(username);
  await orderService.registerOrder(productsIds, userId);
  res.status(201).json({ userId, productsIds });
};

export { getOrders, registerOrder };
