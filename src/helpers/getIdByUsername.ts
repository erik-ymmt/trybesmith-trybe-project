import { RowDataPacket } from 'mysql2';
import connection from '../models/connection';

type Ids = {
  id: string
};

const getIdByUsername = async (username: string) => {
  const [[{ id }]] = await connection.execute<(
  Ids & RowDataPacket)[]>(
    'SELECT id FROM Trybesmith.Users WHERE username = ?',
    [username],
    );
 
  return Number(id);
};

export default getIdByUsername;
