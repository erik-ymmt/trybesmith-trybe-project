import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.post('/', userController.registerUser);
router.get('/', userController.getUsers);

export default router;
