import { Product } from '../interfaces/product.interface';
import { productModel } from '../models';

const registerProduct = async (product: Product) => {
  const result = await productModel.registerProduct(product);
  return result;
};

const getProducts = async () => {
  const result = await productModel.getProducts();
  return result;
};

export { registerProduct, getProducts };
