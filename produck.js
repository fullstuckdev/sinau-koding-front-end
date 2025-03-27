// Filter dan Transformasi Data
const products = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 500 },
    { name: "Monitor", price: 1200 }
];

// Filter produk dengan harga di atas 1000
const filteredProducts = products.filter(product => product.price > 1000);

// Ambil hanya nama produk
const productNames = filteredProducts.map(product => product.name);

// Gabungkan nama produk menjadi satu string, dipisahkan dengan koma
const resultString = productNames.join(", ");

console.log("Produk dengan harga di atas 1000:", resultString);
