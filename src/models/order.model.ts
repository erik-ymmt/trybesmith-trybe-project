import { RowDataPacket } from 'mysql2/promise';
import { OrderWithIds } from '../interfaces/order.interface';
import connection from './connection';

const getOrders = async () => {
  const [result] = await connection.execute<(OrderWithIds & RowDataPacket)[]>(
    `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS 'productsIds'
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Products as p
    ON o.id = p.orderId
    GROUP BY o.id
    `);

  return result;
};

const registerOrder = async () => {};

export { getOrders, registerOrder };
