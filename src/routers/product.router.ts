import express from 'express';
import { productController } from '../controllers';
import validateProduct from '../middlewares/validateProduct';

const router = express.Router();

router.post('/', validateProduct, productController.registerProduct);
router.get('/', productController.getProducts);

export default router;
