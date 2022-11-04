interface Product {
  name: string;
  amount: string;
  orderId: number;
}

interface ProductWithId extends Product {
  id: number;
}

export { Product, ProductWithId };
