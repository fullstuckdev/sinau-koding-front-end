const products = [
  { name: "Laptop", category: "elektronik", price: 1000 },
  { name: "Phone", category: "elektronik", price: 500 },
  {
    name: "Tablet",
    category: "elektronik",
    price: 800,
  },
  {
    name: "Kemeja Putih",
    category: "Fashion",
    price: 800,
  },
  {
    name: "Celana Jeans",
    category: "Fashion",
    price: 800,
  },
];

const totalPrice = products.reduce((total, product) => {
  return product.price > 500 ? total + product.price : total;
}, 0);

// console.log(totalPrice);

const categorizedItems = products.reduce((result, item) => {
  if (!result[item.category]) {
    result[item.category] = [];
  }

  result[item.category].push(item);

  return result;
}, {});

console.log(JSON.stringify(categorizedItems, null, 2));
