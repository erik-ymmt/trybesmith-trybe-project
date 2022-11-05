import express from 'express';
import { login } from '../controllers';
import validateLogin from '../middlewares/validateLogin';

const router = express.Router();

router.get('/', validateLogin, login);

export default router;
