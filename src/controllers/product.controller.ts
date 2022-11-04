import { Request, Response } from 'express';
import { Product } from '../interfaces/product.interface';
import { productService } from '../services';

const registerProduct = async (req: Request, res: Response) => {
  const product:Product = req.body;

  const result = await productService.registerProduct(product);
  res.status(201).json(result);
};

const getProducts = () => {};

export { registerProduct, getProducts };
