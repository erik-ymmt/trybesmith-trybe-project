import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

const secret = process.env.JWT_SECRET;

const generateToken = (user: User) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payload = { username: user.username };

  const token = jwt.sign(
    payload,
    secret as string,
    jwtConfig as SignOptions,
  );

  return token;
};

export default generateToken;