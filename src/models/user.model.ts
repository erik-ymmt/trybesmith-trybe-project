import { User } from '../interfaces/user.interface';
import connection from './connection';

const registerUser = async (user: User) => {
  const result = await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );

  return result;
};

const getUser = () => {};

export {
  registerUser,
  getUser,
};