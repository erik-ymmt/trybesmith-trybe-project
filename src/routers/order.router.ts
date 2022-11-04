import express from 'express';
import { orderController } from '../controllers';

const router = express.Router();

router.get('/', orderController.getOrders);

export default router;
