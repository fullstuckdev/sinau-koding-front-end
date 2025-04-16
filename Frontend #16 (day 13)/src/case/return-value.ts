interface Products {
  id: string;
  name: string;
  price: number;
}

function createProduct(name: string, price: number): Products {
  return {
    id: Date.now().toString(),
    name,
    price,
  };
}

console.log(createProduct("Laptop", 20000));
