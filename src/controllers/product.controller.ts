import { Request, Response } from 'express';
import { Product } from '../interfaces/product.interface';
import { productService } from '../services';

const registerProduct = async (req: Request, res: Response) => {
  const product:Product = req.body;

  const result = await productService.registerProduct(product);
  res.status(201).json(result);
};

const getProducts = async (_req: Request, res: Response) => {
  const result = await productService.getProducts();
  res.status(200).json(result);
};

export { registerProduct, getProducts };
