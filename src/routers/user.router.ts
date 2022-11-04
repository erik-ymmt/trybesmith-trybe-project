import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.post('/users', userController.registerUser);
router.get('/users', userController.getUsers);

export default router;
