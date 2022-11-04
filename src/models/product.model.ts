import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Product, ProductWithId } from '../interfaces/product.interface';

const registerProduct = async (product: Product): Promise<ProductWithId> => {
  console.log('teste', product);

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );

  return { id: insertId, ...product };
};

const getProducts = () => {};

export { registerProduct, getProducts };
