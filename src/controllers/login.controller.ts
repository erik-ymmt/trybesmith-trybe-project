import { Request, Response } from 'express';
import generateToken from '../authentication/generateToken';

const login = async (req: Request, res: Response) => {
  const userLogin = req.body;
  const token = generateToken(userLogin);

  res.status(200).json({ token });
};

export default login;
