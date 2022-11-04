import { orderModel } from '../models';

const getOrders = async () => {
  const result = await orderModel.getOrders();
  return result;
};

const registerOrder = async () => {};

export { getOrders, registerOrder };
