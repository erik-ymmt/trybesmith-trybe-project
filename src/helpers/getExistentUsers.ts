import { RowDataPacket } from 'mysql2';
import connection from '../models/connection';

type Usernames = {
  username: string
};

type Passwords = {
  password: string
};

const getUsers = async () => {
  const [result] = await connection.execute<(Usernames[] & RowDataPacket)[]>(
    'SELECT username FROM Trybesmith.Users');

  const users = result.map((e) => e.username); 
  return users;
};

const getPasswords = async (username: string) => {
  const [[{ password }]] = await connection.execute<(
  Passwords & RowDataPacket)[]>(
    'SELECT password FROM Trybesmith.Users WHERE username = ?',
    [username],
    );

  return password;
};

export { getUsers, getPasswords };
