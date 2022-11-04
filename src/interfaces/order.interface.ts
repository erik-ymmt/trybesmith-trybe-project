interface Order {
  productsIds: number[];
}

interface OrderWithIds extends Order {
  productsIds: number[];
}

export { Order, OrderWithIds };
