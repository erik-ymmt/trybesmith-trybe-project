import express from 'express';
import * as router from './routers';

const app = express();

app.use(express.json());

app.use('/products', router.productRouter);
app.use('/users', router.userRouter);
app.use('/orders', router.orderRouter);

export default app;
