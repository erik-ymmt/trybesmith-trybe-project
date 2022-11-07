import { orderModel, productModel } from '../models';

const getOrders = async () => {
  const result = await orderModel.getOrders();
  return result;
};

const registerOrder = async (productsIds: number[], userId: number): Promise<void> => {
  const orderId = await orderModel.registerOrder(userId);
  const register = productsIds.map(async (productId) => {
    await productModel.updateProductOrderId(orderId, productId);
  });
  await Promise.all(register);
};

export { getOrders, registerOrder };
