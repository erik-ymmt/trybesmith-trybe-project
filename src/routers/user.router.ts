import express from 'express';
import { userController } from '../controllers';
import validateUser from '../middlewares/validateUser';

const router = express.Router();

router.post('/', validateUser, userController.registerUser);
router.get('/', userController.getUsers);

export default router;
