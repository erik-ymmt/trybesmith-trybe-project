import { Request, Response } from 'express';
import { Product } from '../interfaces/product.interface';
import { productService } from '../services';

const registerProduct = async (req: Request, res: Response) => {
  const product:Product = req.body;

  await productService.registerProduct(product);
  res.status(201).json(product);
};

const getProducts = () => {};

export { registerProduct, getProducts };
