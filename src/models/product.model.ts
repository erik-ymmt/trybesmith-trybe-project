import { Product } from '../interfaces/product.interface';
import connection from './connection';

const registerProduct = async (product: Product) => {
  const result = await connection.execute(
    'INSERT INTO Trybesmith.Products (name, amount, order_id) VALUES (?, ?, ?);',
    [product.name, product.amount, product.orderId],
  );

  console.log(result);

  return result;
};

const getProducts = () => {};

export { registerProduct, getProducts };
