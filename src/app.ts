import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import * as router from './routers';

const app = express();

app.use(express.json());

app.use('/products', router.productRouter);
app.use('/users', router.userRouter);
app.use('/orders', router.orderRouter);
app.use('/login', router.loginRouter);
app.use(errorMiddleware);

export default app;
