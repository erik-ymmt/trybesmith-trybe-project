import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.post('/', productController.registerProduct);
router.get('/', productController.getProducts);

export default router;
