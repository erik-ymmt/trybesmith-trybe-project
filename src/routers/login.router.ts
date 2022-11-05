import express from 'express';
import login from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin';
import verifyUser from '../middlewares/verifyUser';

const router = express.Router();

router.post('/', validateLogin, verifyUser, login);

export default router;
