import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Product, ProductWithId } from '../interfaces/product.interface';

const registerProduct = async (product: Product): Promise<ProductWithId> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );

  return { id: insertId, ...product };
};

const getProducts = async () => {
  const [result] = await connection.execute<(ProductWithId & RowDataPacket)[]>(
    'SELECT * FROM Trybesmith.Products');
  return result;
};

export { registerProduct, getProducts };
