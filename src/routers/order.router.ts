import express from 'express';
import { orderController } from '../controllers';
import validateToken from '../authentication/validateToken';
import validateOrder from '../middlewares/validateOrder';

const router = express.Router();

router.get('/', orderController.getOrders);
router.post('/', validateToken, validateOrder, orderController.registerOrder);

export default router;
