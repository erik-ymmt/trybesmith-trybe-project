interface Product {
  name: string;
  amount: string;
}

interface ProductWithId extends Product {
  id: number;
}

export { Product, ProductWithId };
